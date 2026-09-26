import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CutFigure,
  EYE,
  HEAD_GIRL,
  HEAD_MAN,
  JULIET_HAIR,
  JULIET_STRANDS,
  TONSURE,
  TONSURE_SHINE,
  TONSURE_STRANDS,
  footShadow,
  headAt,
  line,
  openHand,
  type Part,
} from './acts-3-4-kit'
import { CELL, Cell } from './cell-acts-3-4'

/**
 * Act 4, Scene 1: "The Friar's plan", the fourteenth moment in the guide's
 * timeline. Friar Lawrence's cell, by day: the same room as "Banished"
 * (./cell-acts-3-4.tsx), with the lamp out and daylight in the window. Every
 * detail is from the scene in the held edition
 * (src/data/full-texts/romeo-and-juliet.ts):
 *
 * - JULIET: "O shut the door, and when thou hast done so, / Come weep with
 *   me". Paris has gone, so she and the Friar are alone.
 * - FRIAR LAWRENCE: "Take thou this vial, being then in bed, / And this
 *   distilled liquor drink thou off". JULIET: "Give me, give me! O tell not
 *   me of fear!" So he holds up the small stoppered vial, dark against the
 *   window, and she reaches for it with both hands.
 * - FRIAR LAWRENCE: "The roses in thy lips and cheeks shall fade / To paly
 *   ashes". So the spot colour is on her cheek, the colour the potion will
 *   take away. It was on her lips too, until the review of 26 September 2026:
 *   a red mouth on a girl reaching for a vial of something to drink can read
 *   as blood, so the lips are left to the words.
 * - Juliet offers to come back "at evening mass", so it is day: the sky in
 *   the window is pale and the lamp on the table is out.
 *
 * LEFT OUT, ON PURPOSE. Before the Friar offers the vial, Juliet draws a
 * knife and says she will kill herself rather than marry Paris. That is a
 * threat of self-harm by a girl of thirteen, and the style guide says the
 * picture carries the weight of the moment, not its injury: so no knife is
 * drawn, and the panel shows the moment the plan is handed to her instead.
 *
 * Juliet is cut in paper, a head shorter than the Friar, with her dark hair
 * loose; the Friar has his tonsure, habit, hood and knotted cord, as in
 * "Banished" (./acts-3-4-kit.tsx). No seeds of its own; the room's are in
 * ./cell-acts-3-4.tsx.
 */

const { W, H } = CELL

// ── Juliet, facing right, reaching for the vial with both hands ─────────────
const JULIET_HEAD = headAt([286, 122], 1, 0.94, -16)
const JULIET: Part[] = [
  { d: JULIET_HAIR, t: JULIET_HEAD },
  // the far arm, reaching, lower. The two hands are kept well apart and
  // large, the fingers fanned: first cut small and overlapping, they read
  // as two fists at panel size (review of 26 September 2026).
  {
    d: line([
      [282, 146],
      [306, 164],
      [330, 164],
    ]),
    w: 8,
  },
  ...openHand([330, 164], -4, 1.3, -1, 20),
  // a fitted bodice and a full skirt
  {
    d: 'M276 138C268 142 266 154 268 166C269 174 271 182 273 190C265 226 258 264 252 304L326 304C320 264 312 226 296 190C298 182 300 172 300 162C300 150 296 142 290 138C286 136 280 136 276 138Z',
  },
  { d: HEAD_GIRL, t: JULIET_HEAD },
  // the near arm, reaching higher, towards the vial
  {
    d: line([
      [290, 148],
      [314, 140],
      [340, 124],
    ]),
    w: 8,
    sep: 1.4,
  },
  ...openHand([340, 124], -34, 1.3, -1, 20).map((p) => ({ ...p, sep: 1.1 })),
]
const JULIET_CUTS =
  gouge(274, 204, 262, 298, 0.9, 0.6) +
  gouge(286, 208, 288, 298, 0.8, 0) +
  gouge(296, 204, 312, 298, 0.8, -0.6) +
  gouge(272, 190, 296, 190, 0.8)

// ── Friar Lawrence, facing left, holding up the vial ────────────────────────
const FRIAR_HEAD = headAt([452, 102], -1, 1.06, -6)
const FRIAR: Part[] = [
  // the hood, down on his shoulders
  { d: 'M458 116C472 108 489 114 492 129C489 141 478 146 466 140C462 132 459 124 458 116Z' },
  // the habit
  {
    d: 'M448 124C438 130 434 156 434 190C432 230 428 266 424 300L504 300C500 266 496 230 494 194C494 160 490 134 478 124C470 120 456 120 448 124Z',
  },
  { d: 'M434 297L416 298C412 299 411 303 415 304L438 304Z' },
  { d: 'M496 297L486 298C483 299 483 303 486 304L504 304Z' },
  { d: HEAD_MAN, t: FRIAR_HEAD },
  // the near arm, in its wide sleeve, raising the vial
  {
    d: line([
      [446, 136],
      [426, 156],
    ]),
    w: 14,
    sep: 1.6,
  },
  { d: 'M431.1 151.3L409.3 123.2L394.7 136.8L420.9 160.7Z', sep: 1.6 },
  // his hand round the foot of the vial
  {
    d: 'M396 132C394 126 398 122 404 123C409 124 411 129 409 134C407 138 400 139 397 136Z',
    sep: 1.2,
  },
  {
    d: line([
      [398, 126],
      [393, 121],
    ]),
    w: 2.4,
    sep: 1,
  },
]
const FRIAR_CUTS =
  gouge(440, 150, 430, 292, 1.1, 1.2) +
  gouge(456, 176, 452, 294, 0.9, 0.4) +
  gouge(476, 170, 488, 294, 1, -0.8) +
  gouge(482, 124, 472, 140, 0.8, -1)

function TheFriarsPlan({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [370, 140], push: 1.035 })}>
      <Cell uid={uid} time="day" />

      <path d={footShadow(290, 306, 42) + footShadow(462, 304, 46)} fill={INK} />

      <CutFigure parts={FRIAR} cuts={FRIAR_CUTS}>
        <path d={TONSURE} transform={FRIAR_HEAD} fill={PAPER} />
        <path d={TONSURE_SHINE} transform={FRIAR_HEAD} fill={PAPER} />
        <path
          d={TONSURE_STRANDS}
          transform={FRIAR_HEAD}
          stroke={INK}
          strokeWidth={0.9}
          fill="none"
        />
        <path d={EYE} transform={FRIAR_HEAD} fill={PAPER} />
        {/* the knotted cord at his waist */}
        <path
          d="M436 196C450 199 472 199 494 195M444 198C443 220 442 240 442 262"
          stroke={PAPER}
          strokeWidth={1.8}
          fill="none"
        />
        <g fill={PAPER}>
          <circle cx={443} cy={222} r={2.4} />
          <circle cx={442} cy={242} r={2.4} />
          <circle cx={442} cy={262} r={2.6} />
        </g>
      </CutFigure>

      {/* the vial: a small stoppered flask of distilled liquor, dark against the day */}
      <g className="lc-pop" style={timing({ delay: 0.9, dur: 0.6 })}>
        <path
          d="M398 94H404V101C408 103 410 107 410 112V120C410 123 407 125 404 125H398C395 125 392 123 392 120V112C392 107 394 103 398 101Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <rect
          x={396}
          y={88}
          width={10}
          height={7}
          rx={1.5}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path d={gouge(395, 108, 395, 120, 1.1, -0.4)} fill={PAPER} />
      </g>

      <CutFigure parts={JULIET} cuts={JULIET_CUTS} tone="paper" halo={2.2}>
        {/* her dark hair, loose down her back */}
        <path d={JULIET_HAIR} transform={JULIET_HEAD} fill={INK} />
        <path d={JULIET_STRANDS} transform={JULIET_HEAD} fill={PAPER} />
        <path d={EYE} transform={JULIET_HEAD} fill={INK} />
        <path d={gouge(4.6, -7.4, 10.8, -8.2, 0.6, -0.4)} transform={JULIET_HEAD} fill={INK} />
        {/* "The roses in thy lips and cheeks": the cheek only, never the mouth */}
        <ellipse cx={6} cy={6.4} rx={2.6} ry={1.7} transform={JULIET_HEAD} fill={RED} />
      </CutFigure>
    </g>
  )
}

export const theFriarsPlan: LinocutArt = { width: W, height: H, Draw: TheFriarsPlan }
