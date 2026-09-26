import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow, prayingHands } from './acts-3-4-kit'
import { CELL, Cell, LAMP } from './cell-acts-3-4'
import {
  arm,
  CutFigure,
  doublet,
  EYE,
  gown,
  HEAD_GIRL,
  HEAD_MAN,
  headAt,
  JULIET_FACE,
  JULIET_HAIR,
  JULIET_STRANDS,
  limb,
  ROMEO_CURLS,
  ROMEO_HAIR,
  sheathed,
  shoe,
  TONSURE,
  TONSURE_STRANDS,
  type P,
  type Piece,
} from './verona-kit'

/**
 * Act 2, Scenes 4 to 6: "A secret wedding", the eighth moment in the guide's
 * timeline. The picture is its last scene, 2.6, in Friar Lawrence's cell,
 * the moment Juliet arrives. Every detail is from the held edition (Project
 * Gutenberg #1513, src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "Friar Lawrence's Cell." It is the same room as the cell of "Banished"
 *   and "The Friar's plan" (./cell-acts-3-4.tsx): the window on the walls of
 *   Verona, the herbs drying from the beam, the shelf of jars, the basket and
 *   the table. Romeo bids the Nurse send Juliet "this afternoon" (2.4), and
 *   she greets the Friar with "Good even", so it is by day, and the window is
 *   bright.
 * - "So smile the heavens upon this holy act That after-hours with sorrow
 *   chide us not." So the Friar stands by his table with his hands pressed
 *   together in prayer. (He was first drawn with a finger raised in warning;
 *   at panel size the raised finger read as a thumbs-up, so it went.)
 * - "These violent delights have violent ends, And in their triumph die; like
 *   fire and powder, Which as they kiss consume." So beside him the lamp
 *   burns, lit by day in the dim cell, the one flame in the picture, printed
 *   in the spot colour: the fire of his image, next to the lovers.
 * - "Here comes the lady. O, so light a foot Will ne'er wear out the
 *   everlasting flint." So Juliet comes in lightly, her gown swinging, cut in
 *   paper as in the other panels.
 * - "Ah, Juliet, if the measure of thy joy Be heap'd like mine". "Do thou but
 *   close our hands with holy words". So Romeo, black against the bright
 *   window, turns to her with his hand held out, his other hand on his heart,
 *   and she holds out hers; their hands have not yet met, because the Friar
 *   has still to join them. The wedding itself happens offstage ("Come, come
 *   with me, and we will make short work"), so it is not drawn.
 *
 * Juliet is "not fourteen" (1.3), so nothing here is more than hands held
 * out. The people are cut as in the other panels of moments 6 to 10
 * (./verona-kit.tsx). Nothing is taken from a film or stage production. The
 * room's seeds are in ./cell-acts-3-4.tsx.
 */

const { W, H } = CELL

// ── Romeo, against the window, facing right ─────────────────────────────────

const R_NECK: P = [380, 168]
const R_HIP: P = [374, 236]
const R_HEAD = { at: [388, 146] as P, rot: 6 }
const R_SWORD = sheathed([372, 230], 1, 76)
const ROMEO: Piece[] = [
  {
    d: 'M370 164C360 172 352 192 348 216C345 234 344 246 346 256L364 252C362 234 364 210 370 190Z',
  },
  {
    d: limb([
      [371, 236],
      [364, 272],
      [358, 303],
    ]),
    w: 9,
  },
  shoe([357, 304], 1),
  R_SWORD.scabbard,
  { d: limb([R_NECK, R_HIP]), w: 22 },
  { d: doublet(R_NECK, R_HIP, 1, { width: 28, hem: 16, flare: 6 }) },
  {
    d: limb([
      [378, 236],
      [388, 272],
      [394, 303],
    ]),
    w: 9,
  },
  shoe([395, 304], 1),
  { d: HEAD_MAN, t: headAt(1, R_HEAD.at, R_HEAD.rot) },
  { d: ROMEO_HAIR, t: headAt(1, R_HEAD.at, R_HEAD.rot) },
  arm(
    [
      [376, 180],
      [386, 208],
      [396, 196],
    ],
    -118,
    { w: 7.5, sep: 1.4, size: 13, spread: 12, thumb: -1 },
  ),
  arm(
    [
      [386, 178],
      [408, 198],
      [430, 192],
    ],
    -8,
    { w: 8, sep: 1.5, size: 15, spread: 15, thumb: -1 },
  ),
]
const ROMEO_CUTS = gouge(364, 196, 354, 250, 1.8, 0.6) + gouge(368, 226, 386, 227, 1.8)

// ── Juliet, coming in lightly, facing left ──────────────────────────────────

const J_NECK: P = [540, 180]
const J_WAIST: P = [546, 230]
const J_HEAD = { at: [533, 159] as P, rot: -2, scale: 0.97 }
const JULIET: Piece[] = [
  { d: gown(J_NECK, J_WAIST, 306, -1, { shoulder: 24, waistW: 17, front: 24, back: 38 }) },
  shoe([514, 306], -1),
  { d: HEAD_GIRL, t: headAt(-1, J_HEAD.at, J_HEAD.rot, J_HEAD.scale) },
  arm(
    [
      [536, 190],
      [520, 208],
      [502, 200],
    ],
    194,
    { w: 7, sep: 1.3, size: 13, spread: 14, thumb: 1 },
  ),
]
/** The folds of her gown as it swings, and its waist. */
const JULIET_CUTS =
  gouge(536, 236, 522, 300, 1.8, 0.8) +
  gouge(550, 240, 556, 302, 1.8) +
  gouge(560, 240, 580, 298, 1.6, -0.8) +
  gouge(532, 233, 556, 235, 1.6)

// ── Friar Lawrence, by his table, facing left ───────────────────────────────

const F_NECK: P = [752, 166]
const F_WAIST: P = [760, 232]
const F_HEAD = { at: [744, 146] as P, rot: -6 }
const COWL = `M${F_NECK[0] + 2} ${F_NECK[1] - 4}C${F_NECK[0] + 18} ${F_NECK[1] - 6} ${F_NECK[0] + 26} ${F_NECK[1] + 8} ${F_NECK[0] + 22} ${F_NECK[1] + 24}C${F_NECK[0] + 12} ${F_NECK[1] + 28} ${F_NECK[0]} ${F_NECK[1] + 20} ${F_NECK[0] - 6} ${F_NECK[1] + 10}Z`
/** His two hands pressed together, palm to palm, the fingers up. */
const PRAYER = prayingHands([722, 204], -100, 1.2)
const FRIAR: Piece[] = [
  { d: gown(F_NECK, F_WAIST, 304, -1, { shoulder: 32, waistW: 28, front: 30, back: 34 }) },
  shoe([740, 305], -1),
  // the far arm, bent to bring its hand to the other
  {
    d: limb([
      [760, 176],
      [760, 210],
      [730, 206],
    ]),
    w: 11,
  },
  { d: HEAD_MAN, t: headAt(-1, F_HEAD.at, F_HEAD.rot) },
  { d: COWL },
  // the near arm, its hand pressed to the other in prayer:
  // "So smile the heavens upon this holy act"
  [
    {
      d: limb([
        [746, 176],
        [738, 210],
        [724, 204],
      ]),
      w: 11,
      sep: 1.5,
    },
    { ...PRAYER.part, sep: 1.5 },
  ],
]
const FRIAR_CUTS =
  gouge(742, 233, 778, 230, 2.6) +
  gouge(772, 240, 784, 298, 2, -0.6) +
  gouge(756, 246, 758, 300, 1.8) +
  gouge(738, 250, 728, 298, 1.8, 0.6) +
  gouge(F_NECK[0] + 22, F_NECK[1] + 21, F_NECK[0] - 3, F_NECK[1] + 13, 1.8, -1.4)

function ASecretWedding({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
      <Cell uid={uid} time="day" />

      {/* the lamp, lit: "like fire and powder, Which as they kiss consume" */}
      <path
        className="lc-flicker"
        style={timing({ dur: 0.9 })}
        d={`M${LAMP[0]} 191C${LAMP[0] - 4} 186 ${LAMP[0] - 3} 180 ${LAMP[0] + 1} 170C${LAMP[0] + 5} 180 ${LAMP[0] + 6} 186 ${LAMP[0]} 191Z`}
        fill={RED}
      />

      {/* shadows on the flags */}
      <path
        d={footShadow(376, 308, 30) + footShadow(548, 308, 40) + footShadow(752, 308, 36)}
        fill={INK}
      />

      {/* Romeo, black against the bright window */}
      <CutFigure parts={ROMEO} cuts={ROMEO_CUTS}>
        <g transform={headAt(1, R_HEAD.at, R_HEAD.rot)}>
          <path d={ROMEO_CURLS} fill={PAPER} />
          <path d={EYE} fill={PAPER} />
        </g>
        <path d={R_SWORD.hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />
      </CutFigure>

      {/* Juliet, "so light a foot" */}
      <CutFigure parts={JULIET} cuts={JULIET_CUTS} tone="paper" halo={2}>
        <g transform={headAt(-1, J_HEAD.at, J_HEAD.rot, J_HEAD.scale)}>
          <path d={JULIET_HAIR} fill={INK} />
          <path d={JULIET_STRANDS} fill={PAPER} />
          <path d={JULIET_FACE} fill={INK} />
          <path d={EYE} fill={INK} />
        </g>
      </CutFigure>

      {/* Friar Lawrence, his hands together in prayer */}
      <CutFigure parts={FRIAR} cuts={FRIAR_CUTS}>
        <g transform={headAt(-1, F_HEAD.at, F_HEAD.rot)}>
          <path d={TONSURE} fill={PAPER} />
          <path d={TONSURE_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={EYE} fill={PAPER} />
        </g>
        <path d={gouge(2.5, 0, 16.5, 0, 1.4)} transform={PRAYER.t} fill={PAPER} />
      </CutFigure>
    </g>
  )
}

export const aSecretWedding: LinocutArt = { width: W, height: H, Draw: ASecretWedding }
