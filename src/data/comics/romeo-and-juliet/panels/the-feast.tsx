import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CAP,
  CAP_BAND,
  CAP_FLAT,
  COIF,
  COIF_EDGE,
  CutFigure,
  EYE,
  FEATHER,
  FEATHER_QUILL,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HEAD_GIRL,
  HEAD_MAN,
  HEAD_NURSE,
  HEAD_WOMAN,
  JULIET_EYE,
  JULIET_FACE,
  JULIET_HAIR,
  JULIET_STRANDS,
  MASK,
  MASK_EYE,
  MASK_TIE,
  ROMEO_CURLS,
  ROMEO_HAIR,
  VEIL,
  WHITE_BROW,
  doublet,
  gown,
  headAt,
  limb,
  openArm,
  sheathed,
  shoe,
  type P,
  type Piece,
} from './people'

/**
 * Act 1, Scene 5: "The feast", the fifth moment in the guide's timeline. A
 * hall in Capulet's house during the feast, at night, at the moment Romeo
 * first takes Juliet's hand. Every detail is from the held edition:
 *
 * - "Come, musicians, play. / A hall, a hall, give room! And foot it, girls.
 *   [Music plays, and they dance.] / More light, you knaves; and turn the
 *   tables up". Torches burn on the walls, the tables stand turned up against
 *   the back wall, and couples dance behind. Old Capulet, white-bearded in his
 *   cap and gown, stands among them, holding out a hand to his guests
 *   ("What, cheerly, my hearts").
 * - "O, she doth teach the torches to burn bright!"; "So shows a snowy dove
 *   trooping with crows". Juliet is cut in white among the dark figures, as
 *   the other panels cut her: a girl, a head shorter than Romeo, her dark
 *   hair loose down her back. The torches' flames are the spot colour, and
 *   the one on the wall between the two of them lights their faces.
 * - "If I profane with my unworthiest hand / This holy shrine"; "For saints
 *   have hands that pilgrims' hands do touch, / And palm to palm is holy
 *   palmers' kiss." In the middle Romeo, still in his mask ("cover'd with an
 *   antic face"), and Juliet raise their hands and touch palm to palm. The
 *   kiss that follows is not drawn.
 * - "I will withdraw: but this intrusion shall, / Now seeming sweet, convert
 *   to bitter gall. [Exit.]" The line comes just before Romeo speaks to
 *   Juliet. On the left Tybalt, in his feathered cap, is going out through a
 *   lit doorway, his fist clenched, and turns his head to glare back at
 *   Romeo. He never fetched his rapier ("Fetch me my rapier, boy"), so he has
 *   none.
 * - On the right the Nurse, broad, in her white coif and apron, is making her
 *   way through the guests to Juliet ("Madam, your mother craves a word with
 *   you").
 *
 * The guide's quotation for the moment, "My only love sprung from my only
 * hate!", is Juliet's once she learns his name; it is printed without its
 * exclamation mark, a cut the comics test allows, since the words are
 * verbatim. Benvolio is somewhere in the crowd and is not drawn. Nothing is
 * taken from a film or stage production. Seeds: 2501 (walls), 2502 (floor),
 * 2503 to 2505 (the torches' light), 2506 (the corridor).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const FLOOR = 262
/** The torches on the wall: the one between the lovers first. */
const TORCHES: P[] = [
  [574, 116],
  [318, 118],
  [806, 118],
]
/** The doorway Tybalt is leaving by. */
const DOOR = { x0: 40, x1: 168, top: 64 }

type Marks = { walls: string; floor: string; glow: string[]; corridor: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The walls lit by the torches, dark between them.
  const lit = (x: number, y: number) =>
    Math.max(
      ...TORCHES.map(([tx, ty], i) =>
        clamp(1 - Math.hypot((x - tx) * 0.8, (y - ty - 30) * 0.9) / (i === 0 ? 210 : 150)),
      ),
    )
  const walls = gougeField(rng(2501), { x0: 176, x1: W, y0: 22, y1: FLOOR }, lit, {
    spacing: 7,
    len: [26, 72],
    gap: [4, 12],
    max: 4.4,
  })
  // The floor, strewn with rushes, pale where the torchlight falls.
  const f = rng(2502)
  let floor = ''
  for (let i = 0; i < 90; i++) {
    const x = between(f, 0, W)
    const y = between(f, FLOOR + 6, H - 4)
    const a = between(f, -0.5, 0.5)
    const len = between(f, 8, 18)
    floor += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.9)
  }
  const glow = TORCHES.map(([x, y], i) =>
    rays(rng(2503 + i), x, y, {
      from: 16,
      to: i === 0 ? 112 : 72,
      every: i === 0 ? 6 : 10,
      width: 3.2,
    }),
  )
  // The corridor beyond the doorway: a pale floor running away, and its walls.
  let corridor = ''
  for (let k = 0; k < 6; k++) {
    const y = 210 + k * k * 1.6 + k * 4
    corridor += gouge(DOOR.x0, y, DOOR.x1, y, 0.6 + k * 0.12)
  }
  corridor +=
    wedge(DOOR.x0 + 26, 180, DOOR.x0, FLOOR, 0.6, 2) +
    wedge(DOOR.x1 - 26, 180, DOOR.x1, FLOOR, 0.6, 2)
  cached = { walls, floor, glow, corridor }
  return cached
}

/** The trestle tables, turned up on their sides against the back wall. */
const TABLES = `M384 ${FLOOR}V204H486V${FLOOR}ZM660 ${FLOOR}V210H742V${FLOOR}Z`
const TABLE_CUTS =
  gouge(390, 214, 480, 214, 1.2) + gouge(390, 240, 480, 240, 1.2) + gouge(666, 220, 736, 220, 1.2)

/** A small dancer in his or her own frame (feet at 0, 0, facing right), about 120 tall. */
function dancer(
  woman: boolean,
  masked: boolean,
  reach: number,
): { parts: Piece[]; headT: string; masked: boolean } {
  const headT = headAt(1, [4, -108], 0, 0.7)
  const body: Piece[] = woman
    ? [{ d: gown([0, -92], [0, -58], 0, 1, { shoulder: 18, waistW: 13, front: 20, back: 24 }) }]
    : [
        {
          d: limb([
            [-2, -52],
            [-6, -26],
            [-10, 0],
          ]),
          w: 6.4,
        },
        {
          d: limb([
            [2, -52],
            [8, -26],
            [12, 0],
          ]),
          w: 6.4,
        },
        { d: doublet([0, -92], [0, -52], 1, { width: 20, hem: 10, flare: 4 }) },
      ]
  return {
    parts: [
      ...body,
      { d: woman ? HEAD_WOMAN : HEAD_MAN, t: headT },
      ...(woman ? [{ d: VEIL, t: headT }] : []),
      // the near arm raised to the partner's, their hands joined, as in a measure
      {
        d: limb([
          [2, -86],
          [14, -96],
          [reach, -108],
        ]),
        w: 5.4,
      },
    ],
    headT,
    masked,
  }
}
const DANCERS: { at: P; flip: boolean; d: ReturnType<typeof dancer> }[] = [
  { at: [238, 282], flip: false, d: dancer(false, true, 28) },
  { at: [296, 282], flip: true, d: dancer(true, false, 26) },
  { at: [668, 282], flip: false, d: dancer(false, false, 26) },
  { at: [724, 282], flip: true, d: dancer(true, false, 26) },
]

// ── Tybalt, going out, glaring back ─────────────────────────────────────────
const T_NECK: P = [104, 168]
const T_HIP: P = [108, 234]
const T_HEAD = headAt(1, [108, 146], 4)
const TYBALT: Piece[] = [
  // stepping out to the left
  {
    d: limb([
      [112, 234],
      [120, 276],
      [128, 316],
    ]),
    w: 9,
  },
  shoe([128, 317], -1),
  { d: limb([T_NECK, T_HIP]), w: 22 },
  { d: doublet(T_NECK, T_HIP, -1, { width: 28, hem: 16, flare: 6, swing: 4 }) },
  {
    d: limb([
      [104, 234],
      [90, 274],
      [78, 314],
    ]),
    w: 9,
  },
  shoe([76, 315], -1),
  { d: HEAD_MAN, t: T_HEAD },
  { d: CAP_FLAT, t: T_HEAD },
  // the near arm down at his side, the fist clenched
  [
    {
      d: limb([
        [108, 176],
        [118, 206],
        [116, 230],
      ]),
      w: 8.4,
      sep: 1.4,
    },
    { d: 'M110.4 232a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z', sep: 1.4 },
  ],
]
const TYBALT_CUTS = gouge(94, 208, 120, 209, 0.9) + gouge(104, 178, 104, 204, 0.8, 0.6)

// ── Romeo, masked, his hand raised to hers ──────────────────────────────────
const R_NECK: P = [520, 168]
const R_HIP: P = [514, 236]
const R_HEAD = headAt(1, [528, 146], 4)
const R_SWORD = sheathed([512, 230], 1, 72)
const ROMEO: Piece[] = [
  // the short cloak on his back
  {
    d: 'M512 166C500 174 494 196 491 222C489 238 489 250 490 258L508 254C506 234 508 208 514 188Z',
  },
  // the far arm at his side
  {
    d: limb([
      [514, 176],
      [506, 204],
      [508, 230],
    ]),
    w: 7.8,
  },
  {
    d: limb([
      [510, 236],
      [504, 278],
      [500, 318],
    ]),
    w: 9,
  },
  shoe([500, 319], 1),
  R_SWORD.scabbard,
  { d: limb([R_NECK, R_HIP]), w: 22 },
  { d: doublet(R_NECK, R_HIP, 1, { width: 28, hem: 16, flare: 6 }) },
  {
    d: limb([
      [518, 236],
      [526, 278],
      [532, 318],
    ]),
    w: 9,
  },
  shoe([533, 319], 1),
  { d: HEAD_MAN, t: R_HEAD },
  { d: ROMEO_HAIR, t: R_HEAD },
  // the near hand raised, palm to her palm
  openArm(
    [
      [524, 176],
      [546, 204],
      [566, 196],
    ],
    -84,
    { w: 8, sep: 1.5, size: 17, spread: 11, thumb: -1 },
  ),
]
const ROMEO_CUTS = gouge(504, 206, 494, 250, 0.9, 0.6) + gouge(506, 214, 528, 215, 0.8)

// ── Juliet, cut in white, her hand raised to his ────────────────────────────
const J_HEAD = headAt(-1, [618, 162], 2, 0.96)
const JULIET: Piece[] = [
  { d: gown([624, 180], [620, 238], 324, -1, { shoulder: 25, waistW: 17, front: 32, back: 38 }) },
  { d: HEAD_GIRL, t: J_HEAD },
  // her near hand raised, palm to his
  openArm(
    [
      [616, 190],
      [594, 214],
      [578, 200],
    ],
    -96,
    { w: 7, sep: 1.4, size: 15.5, spread: 11, thumb: 1 },
  ),
]
const JULIET_CUTS =
  gouge(610, 248, 598, 316, 0.8, 0.6) +
  gouge(628, 250, 640, 316, 0.8, -0.6) +
  gouge(606, 238, 634, 238, 0.8)

// ── Capulet, among his guests ───────────────────────────────────────────────
const C_HEAD = headAt(1, [4, -176], 0)
const CAPULET: Piece[] = [
  { d: gown([0, -158], [0, -96], 0, 1, { shoulder: 28, waistW: 20, front: 28, back: 32 }) },
  { d: FULL_BEARD, t: C_HEAD },
  { d: HEAD_MAN, t: C_HEAD },
  { d: CAP, t: C_HEAD },
  // one hand held out to his guests, the other at his side
  {
    d: limb([
      [6, -148],
      [22, -126],
      [38, -124],
    ]),
    w: 8.4,
  },
  { d: 'M37 -124a5.4 5.4 0 1 0 10.8 0a5.4 5.4 0 1 0 -10.8 0Z' },
  {
    d: limb([
      [-4, -148],
      [-14, -124],
      [-2, -112],
    ]),
    w: 8.4,
  },
  { d: 'M-6.4 -111a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z' },
]

// ── The Nurse, making her way to Juliet ─────────────────────────────────────
const N_HEAD = headAt(1, [4, -174], 4)
const NURSE: Piece[] = [
  {
    d: 'M-12 -156C-28 -150 -34 -132 -34 -110C-36 -72 -42 -34 -48 0L54 0C48 -34 40 -72 36 -108C34 -134 28 -150 14 -156C6 -160 -4 -160 -12 -156Z',
  },
  { d: HEAD_NURSE, t: N_HEAD },
  { d: COIF, t: N_HEAD },
  {
    d: limb([
      [12, -146],
      [24, -118],
      [34, -104],
    ]),
    w: 10,
  },
]

/** A torch in its iron bracket on the wall, the flame at (x, y). */
function Torch({ at: [x, y], i }: { at: P; i: number }) {
  return (
    <g>
      <path
        d={`M${x - 3} ${y + 10}L${x + 3} ${y + 10}L${x + 2.5} ${y + 44}L${x - 2.5} ${y + 44}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={`M${x - 14} ${y + 38}H${x}`} stroke={INK} strokeWidth={LINE.bold} />
      <path
        d={`M${x - 7} ${y + 2}H${x + 7}V${y + 11}H${x - 7}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.7 + i * 0.1, delay: i * 0.2 })}
        d={`M${x} ${y + 3}C${x - 10} ${y - 1} ${x - 8} ${y - 13} ${x - 2} ${y - 28}C${x + 1} ${y - 19} ${x + 4} ${y - 17} ${x + 4} ${y - 23}C${x + 10} ${y - 11} ${x + 10} ${y - 1} ${x} ${y + 3}Z`}
        fill={RED}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
    </g>
  )
}

function TheFeast({ uid }: ArtProps) {
  const m = marks()
  const doorClip = `${uid}-door`
  const doorPath = `M${DOOR.x0} ${FLOOR}V${DOOR.top + 64}A64 64 0 0 1 ${DOOR.x1} ${DOOR.top + 64}V${FLOOR}Z`
  return (
    <>
      <defs>
        <clipPath id={doorClip}>
          <path d={doorPath} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [572, 190], push: 1.035 })}>
        {/* the hall's walls, lit by the torches */}
        <path d={m.walls} fill={PAPER} />
        <rect x={0} y={0} width={W} height={16} fill={INK} />
        <path d={`M0 17H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        {m.glow.map((g, i) => (
          <path key={TORCHES[i].join()} d={g} fill={PAPER} />
        ))}
        <circle cx={TORCHES[0][0]} cy={TORCHES[0][1] - 8} r={24} fill={PAPER} />

        {/* the lit doorway on the left, and the corridor beyond */}
        <path d={doorPath} fill={PAPER} />
        <g clipPath={`url(#${doorClip})`}>
          <path d={m.corridor} fill={INK} />
        </g>
        <path d={doorPath} fill="none" stroke={INK} strokeWidth={7} />
        <path
          d={doorPath}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
          transform="translate(-6 0)"
        />

        {/* the tables turned up against the wall */}
        <path d={TABLES} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={TABLE_CUTS} fill={PAPER} />

        {TORCHES.map((t, i) => (
          <Torch key={t.join()} at={t} i={i} />
        ))}

        {/* the floor, strewn with rushes */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={`M0 ${FLOOR + 1}H${W}`} stroke={INK} strokeWidth={LINE.frame} />
        <path
          d={
            gouge(40, 320, 170, 322, 3) +
            gouge(470, 324, 560, 326, 3) +
            gouge(570, 328, 680, 330, 3.2)
          }
          fill={INK}
        />

        {/* the dancers behind, and Capulet among them */}
        {DANCERS.map(({ at, flip, d }) => (
          <CutFigure
            key={at.join()}
            parts={d.parts}
            halo={2.2}
            transform={`translate(${at[0]} ${at[1]}) scale(${flip ? -1 : 1} 1)`}
          >
            <g transform={d.headT}>
              {d.masked ? (
                <>
                  <path d={MASK} fill={PAPER} stroke={INK} strokeWidth={1.2} />
                  <path d={MASK_EYE} fill={INK} />
                </>
              ) : (
                <path d={EYE} fill={PAPER} />
              )}
            </g>
          </CutFigure>
        ))}
        <CutFigure parts={CAPULET} halo={2.6} transform="translate(420 282) scale(0.72)">
          <g transform={C_HEAD}>
            <path d={CAP_BAND} fill={PAPER} />
            {/* Capulet's long white beard and white brow, as in every other panel and his portrait */}
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={1.1} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={1.1} />
            <path d={WHITE_BROW} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>
        <CutFigure parts={NURSE} halo={2.6} transform="translate(800 288) scale(-0.72 0.72)">
          <g transform={N_HEAD}>
            <path d={COIF} fill={PAPER} />
            <path d={COIF_EDGE} fill="none" stroke={INK} strokeWidth={1.6} />
            <path d={EYE} fill={PAPER} />
          </g>
          <path
            d="M-18 -104C-20 -70 -22 -36 -24 -4L26 -4C24 -36 22 -70 20 -104Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
          />
        </CutFigure>

        {/* Tybalt, going out by the lit door, glaring back */}
        <CutFigure parts={TYBALT} cuts={TYBALT_CUTS} halo={2}>
          <g transform={T_HEAD}>
            <path d={EYE} fill={PAPER} />
            <path d={gouge(6, -7.5, 15, -5.5, 0.9)} fill={PAPER} />
            <path d={FEATHER} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
            <path d={FEATHER_QUILL} fill="none" stroke={INK} strokeWidth={1} />
          </g>
        </CutFigure>

        {/* Romeo and Juliet, palm to palm */}
        <CutFigure parts={ROMEO} cuts={ROMEO_CUTS} halo={2}>
          <path d={R_SWORD.hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />
          <g transform={R_HEAD}>
            <path d={ROMEO_CURLS} fill={PAPER} />
            <path d={MASK} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
            <path d={MASK_EYE} fill={INK} />
            <path d={MASK_TIE} fill={PAPER} />
          </g>
        </CutFigure>
        <CutFigure parts={JULIET} cuts={JULIET_CUTS} tone="paper" halo={2}>
          <g transform={J_HEAD}>
            <path d={JULIET_HAIR} fill={INK} />
            <path d={JULIET_STRANDS} fill={PAPER} />
            <path d={JULIET_FACE} fill={INK} />
            <circle cx={JULIET_EYE[0]} cy={JULIET_EYE[1]} r={1.5} fill={INK} />
          </g>
        </CutFigure>
      </g>
    </>
  )
}

export const theFeast: LinocutArt = { width: W, height: H, Draw: TheFeast }
