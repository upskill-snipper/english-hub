import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CutFigure,
  EYE_DOWN,
  HEAD_MAN,
  ROMEO_CURLS,
  ROMEO_HAIR,
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
 * Act 3, Scene 3: "Banished", the eleventh moment in the guide's timeline.
 * Friar Lawrence's cell, late at night. Every detail is from the scene in
 * the held edition (src/data/full-texts/romeo-and-juliet.ts):
 *
 * - ROMEO: "There is no world without Verona walls, / But purgatory,
 *   torture, hell itself." So the cell's one window looks out on the city
 *   wall and its tower, and past it to empty hills (./cell-acts-3-4.tsx).
 * - ROMEO: "then mightst thou tear thy hair, / And fall upon the ground as I
 *   do now, / Taking the measure of an unmade grave." The FRIAR: "There on
 *   the ground, with his own tears made drunk." So Romeo lies full length on
 *   the flags, propped on one arm, his face bowed to the floor and his other
 *   hand clutching his hair. He is propped up, not lying still, so that he
 *   reads as a young man in despair and never as a body.
 * - FRIAR LAWRENCE: "Thou fond mad man, hear me speak a little". So the
 *   Friar bends over him, one open hand held out to him.
 * - "it grows very late"; "'tis late; farewell; good night". So the moon is
 *   up in the window and one lamp burns on the table, its flame the spot
 *   colour.
 *
 * LEFT OUT, ON PURPOSE. Later in the scene Romeo draws his sword on himself
 * and the Friar stops him. That is self-harm, and the style guide says the
 * picture carries the weight of the moment, not its injury: so no sword is
 * drawn at all, and the despair is in his pose. The Nurse arrives later
 * still, after the quotation on the panel, so she is not here either.
 *
 * Romeo and the Friar are the people of ./acts-3-4-kit.tsx: Romeo's curls,
 * the Friar's tonsure, habit, hood and knotted cord. No seeds of its own; the
 * room's are in ./cell-acts-3-4.tsx.
 */

const { W, H } = CELL

// ── Romeo, lying on the floor, head to the right ────────────────────────────
// Drawn with the floor at y 300 and placed a little forward and larger with
// ROMEO_AT, so he lies nearer the reader than the Friar stands.
const ROMEO_AT = 'translate(-40 -22) scale(1.14)'
const ROMEO_HEAD = headAt([398, 271], 1, 1, 52)
const ROMEO: Part[] = [
  // the far leg, its knee drawn up
  {
    d: line([
      [290, 289],
      [248, 284],
      [206, 297],
    ]),
    w: 13,
  },
  { d: 'M209 291C202 289 195 291 193 295C192 299 196 302 203 302L211 302Z' },
  // the far arm, raised to his head: the upper arm is behind him
  {
    d: line([
      [372, 272],
      [354, 234],
    ]),
    w: 9,
  },
  // the doublet, lying along the floor, and its short skirt
  {
    d: line([
      [366, 280],
      [300, 292],
    ]),
    w: 30,
  },
  { d: 'M314 276C302 276 286 280 278 286C272 292 274 302 282 306L318 304Z' },
  // the near leg, straight along the floor
  {
    d: line([
      [294, 298],
      [238, 301],
      [186, 302],
    ]),
    w: 14,
  },
  { d: 'M189 295C181 294 173 296 171 300C170 304 174 307 181 307L191 307Z' },
  // the short cloak thrown over his back
  {
    d: 'M378 262C360 256 330 262 306 272C296 277 292 284 294 290C314 290 340 284 362 280C372 278 378 272 378 262Z',
  },
  // the near arm on the floor, the forearm under his bowed face
  {
    d: line([
      [370, 284],
      [356, 305],
      [404, 302],
    ]),
    w: 9.5,
    sep: 1.6,
  },
  ...openHand([404, 302], -2, 1.05, -1, 12),
  // the head, bowed onto the arm
  { d: HEAD_MAN, t: ROMEO_HEAD },
  { d: ROMEO_HAIR, t: ROMEO_HEAD },
  // the far forearm over his head, the hand in his hair
  {
    d: line([
      [354, 234],
      [380, 246],
    ]),
    w: 8.5,
    sep: 1.5,
  },
  ...openHand([380, 246], 22, 1, -1, 16).map((p) => ({ ...p, sep: 1.3 })),
]
const ROMEO_CUTS =
  gouge(312, 276, 368, 264, 0.9, -1.2) +
  gouge(304, 284, 350, 276, 0.8, -0.8) +
  gouge(212, 299, 284, 296, 1.3) +
  gouge(222, 289, 276, 288, 0.6)

// ── Friar Lawrence, facing left, bending over him ───────────────────────────
const FRIAR_HEAD = headAt([500, 104], -1, 1.06, -20)
const FRIAR: Part[] = [
  // the habit, bending forward from the hips
  {
    d: 'M496 126C505 119 517 119 525 127C535 138 539 160 541 190C545 230 551 266 557 298L477 298C481 262 485 226 487 196C487 176 485 158 489 144C491 136 493 130 496 126Z',
  },
  // the hood, down on his shoulders
  { d: 'M506 118C520 110 537 116 540 131C537 143 526 148 514 142C510 134 507 126 506 118Z' },
  // sandalled feet at the hem
  { d: 'M486 296L468 297C464 298 463 302 467 303L490 303Z' },
  { d: 'M548 296L538 297C535 298 535 302 538 303L556 303Z' },
  { d: HEAD_MAN, t: FRIAR_HEAD },
  // the near arm in its wide sleeve, reaching down to Romeo
  {
    d: line([
      [508, 140],
      [483, 176],
    ]),
    w: 14,
    sep: 1.6,
  },
  { d: 'M477.5 170.6L446 187L462 209L486.5 181.4Z', sep: 1.6 },
  ...openHand([452, 200], 146, 1.12, 1, 16),
]
const FRIAR_CUTS =
  // folds of the habit, lit from the lamp behind him
  gouge(530, 150, 548, 292, 1.2, -1.4) +
  gouge(520, 176, 530, 294, 1, -0.8) +
  gouge(500, 200, 498, 294, 0.8, 0.6) +
  gouge(536, 124, 526, 140, 0.8, -1)

function Banished({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [420, 230], push: 1.03 })}>
      <Cell uid={uid} time="night" />

      {/* shadows under the two of them */}
      <path d={footShadow(290, 326, 130) + footShadow(516, 302, 46)} fill={INK} />

      <CutFigure parts={ROMEO} cuts={ROMEO_CUTS} transform={ROMEO_AT}>
        <path d={ROMEO_CURLS} transform={ROMEO_HEAD} fill={PAPER} />
        <path d={EYE_DOWN} transform={ROMEO_HEAD} fill={PAPER} />
      </CutFigure>

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
        <path d={EYE_DOWN} transform={FRIAR_HEAD} fill={PAPER} />
        {/* the knotted cord at his waist */}
        <path
          d="M489 198C500 200 516 200 538 196M497 199C496 220 494 240 495 262"
          stroke={PAPER}
          strokeWidth={1.8}
          fill="none"
        />
        <g fill={PAPER}>
          <circle cx={496} cy={222} r={2.4} />
          <circle cx={495} cy={242} r={2.4} />
          <circle cx={495} cy={262} r={2.6} />
        </g>
      </CutFigure>
    </g>
  )
}

export const banished: LinocutArt = { width: W, height: H, Draw: Banished }
