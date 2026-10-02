import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COLLAR,
  Figure,
  GRIP_HAND,
  HEAD_HOLMES,
  HEAD_WATSON,
  HOLMES_CUTS,
  HOLMES_HAIR,
  HOLMES_PUPIL,
  HolmesHands,
  LONG_HAND,
  OPEN_HAND,
  WATSON_CUTS,
  WATSON_HAIR,
  WATSON_PUPIL,
  floorBoards,
  gent,
  headAt,
  type P,
  type Part,
} from './people'
import { Lantern } from './the-locked-room'

/**
 * Chapter 6, "Sherlock Holmes Gives a Demonstration": "Holmes gives a
 * demonstration", the seventh moment in the guide's timeline. The picture is
 * the moment the reasoning lands: "We know that he did not come through the
 * door, the window, or the chimney ... Whence, then, did he come?" / "'He
 * came through the hole in the roof,' I cried. / 'Of course he did. He must
 * have done so. If you will have the kindness to hold the lamp for me, we
 * shall now extend our researches to the room above'". So all four ways in
 * are in the room at once, and both men look at the fourth. Every detail is
 * from the held edition:
 *
 * - The room: "It appeared to have been fitted up as a chemical laboratory
 *   ... In the corners stood carboys of acid in wicker baskets. One of these
 *   appeared to leak or to have been broken, for a stream of dark-coloured
 *   liquid had trickled out from it"; "A set of steps stood at one side of the
 *   room, in the midst of a litter of lath and plaster, and above them there
 *   was an opening in the ceiling large enough for a man to pass through. At
 *   the foot of the steps a long coil of rope was thrown carelessly together"
 *   (Chapter 5). The stream is ink: it is creosote, and never the spot
 *   colour.
 * - THE DOOR: "it gave way with a sudden snap" (Chapter 5), so it hangs open
 *   on the dark passage, its edge splintered where the bolt held.
 * - THE WINDOW: "Window is snibbed on the inner side ... Let us open it";
 *   "Here is the print of a foot in mould upon the sill. And here is a
 *   circular muddy mark, and here again upon the floor"; "The moon still
 *   shone brightly on that angle of the house"; "this great hook in the
 *   wall". So the window is open on the moon, which is "half a moon"
 *   (Chapter 5), a boot-print and a round mark on its sill, round marks
 *   across the boards, and the hook beside it.
 * - THE CHIMNEY: "The grate is much too small," so the grate in the wall is
 *   small, and dark.
 * - THE ROOF: Holmes holds the lamp, which he has carried about the room ("He
 *   carried the lamp across to it"), up at the opening, his head back,
 *   looking into it, and the lamplight shows the rafters of the garret above.
 *   The lamp is the carriage lamp of "The locked room at Pondicherry Lodge"
 *   (Lantern), held by its ring in his white hand; its flame is the panel's
 *   one spot of colour.
 * - "Just sit in the corner there, that your footprints may not complicate
 *   matters." So Watson sits forward on a plain chair in the corner, his
 *   face turned up to the opening as he cries out.
 *
 * WHAT IS NOT DRAWN. Bartholomew Sholto's body is in this room, "by the
 * table, in a wooden arm-chair", and it is never shown: the table and its
 * chair are outside the picture, towards the reader. Nor is the thorn.
 * Athelney Jones and Thaddeus Sholto, whom the guide's moment also names,
 * arrive after this ("here are the regulars"), when Holmes and Watson are
 * looking at the thorn, so they are not in this picture: an unreviewed first
 * draft put Jones in the doorway while Holmes still held the lamp to the
 * opening, two moments of the chapter in one. Jones is in ./people.tsx for
 * the panels he is in.
 *
 * Seeds: 701 (the wall), 702 (the floor), 703 (the lamp), 704 (the litter),
 * 705 (the night sky).
 */

const W = 860
const H = 340
const FLOOR = 262
/** The opening in the ceiling, where it meets the ceiling's lower edge. */
const HOLE = { x0: 226, x1: 322 }
const WIN = { x: 450, y: 84, w: 106, h: 116 }
const MOON: P = [503, 170]
/** "this great hook in the wall", beside the window. */
const HOOK = WIN.x + WIN.w + 22
const DOOR = { x0: 692, x1: 774, top: 76 }
/** The small grate: its opening's left edge, and its width. */
const GRATE = { x: 606, w: 34 }

type Marks = {
  wall: string
  floor: string
  rays: string
  litter: string
  ceiling: string
  sky: string
  garret: string
}

// ── HOLMES, the lamp held up to the opening ─────────────────────────────────
const HOL_NECK: P = [392, 158]
const HOL_HEAD = { d: HEAD_HOLMES, at: [410, 126] as P, rot: 30, scale: 1.4 }
const HOL_NEAR: P[] = [
  [388, 166],
  [360, 124],
  [332, 86],
]
const HOL_FAR: P[] = [
  [398, 168],
  [406, 204],
  [404, 236],
]
/** His white hands: the near one closed round the lamp's ring, the far one open. */
const HOL_HANDS = [
  { arm: HOL_NEAR, hand: { parts: GRIP_HAND, scale: 1, rot: 0 } },
  { arm: HOL_FAR, hand: { parts: LONG_HAND, scale: 1.05, rot: 4 } },
]
/** The lamp hangs from that hand by its ring. */
const LAMP: P = [326, 108]
const HOLMES: Part[] = gent({
  facing: -1,
  neck: HOL_NECK,
  hip: [400, 236],
  head: HOL_HEAD,
  body: { width: 28, hem: 52, flare: 7 },
  arm: 8.6,
  leg: 9.6,
  near: {
    arm: HOL_NEAR,
    leg: [
      [396, 236],
      [386, 280],
      [376, 322],
    ],
  },
  far: {
    arm: HOL_FAR,
    leg: [
      [404, 236],
      [412, 280],
      [418, 320],
    ],
  },
})

// ── WATSON, in the corner, looking up ───────────────────────────────────────
/*
 * WHY NOT POINTING (2 October 2026). He was first drawn pointing up at the
 * opening as he cries out. A black hand with one finger raised that steeply
 * read, at panel size, as a rude gesture, on a site many of whose readers
 * are children. So he sits forward with his hands on his knees and his face
 * turned up to the opening, which says the same and cannot be misread.
 */
const WAT_NECK: P = [80, 182]
const WAT_HEAD = { d: HEAD_WATSON, at: [70, 149] as P, rot: -20, scale: 1.35 }
const WATSON: Part[] = gent({
  facing: 1,
  neck: WAT_NECK,
  hip: [66, 250],
  head: WAT_HEAD,
  body: { width: 36, hem: 14, flare: 4 },
  arm: 9,
  leg: 10,
  near: {
    arm: [
      [84, 190],
      [96, 222],
      [114, 240],
    ],
    leg: [
      [70, 250],
      [116, 252],
      [118, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 0.95, rot: 22 },
  },
  far: {
    arm: [
      [76, 190],
      [86, 222],
      [104, 242],
    ],
    leg: [
      [62, 252],
      [106, 258],
      [106, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 0.9, rot: 14 },
  },
})

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - LAMP[0]) * 0.6, (y - LAMP[1]) * 0.9) / 260),
      clamp(1 - Math.hypot((x - MOON[0]) * 0.8, y - 150) / 190) * 0.6,
      0.05,
    )
  const wall = gougeField(rng(701), { x0: 0, x1: W, y0: 38, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
    len: [14, 50],
  })
  const floor = floorBoards(rng(702), W, H, FLOOR, [330, 60], 34)
  const lampRays = rays(rng(703), LAMP[0], LAMP[1], { from: 22, to: 100, every: 6, width: 2.6 })
  // the lath and plaster knocked down round the foot of the steps
  const r = rng(704)
  let litter = ''
  for (let k = 0; k < 16; k++) {
    const x = between(r, 190, 360)
    const y = between(r, 292, 322)
    const len = between(r, 8, 20)
    const a = between(r, -0.5, 0.5)
    litter += `M${n(x)} ${n(y)}L${n(x + Math.cos(a) * len)} ${n(y + Math.sin(a) * len)}`
  }
  // the ceiling seen from below: joists running back to the far wall
  let ceiling = ''
  for (let x = -200; x < W + 200; x += 44) {
    const xb = 330 + (x - 330) * 0.72
    ceiling += `M${n(x)} 0L${n(xb)} 36`
  }
  // the night sky in the window, lit round the moon
  const sky = gougeField(
    rng(705),
    { x0: WIN.x - 10, x1: WIN.x + WIN.w + 10, y0: WIN.y + 4, y1: WIN.y + WIN.h },
    (x, y) => clamp(0.15 + (1 - Math.hypot(x - MOON[0], y - MOON[1]) / 90) * 0.8),
    { spacing: 5, len: [8, 26] },
  )
  // the garret above the opening, lit from below by the lamp: its rafters
  // running up to the ridge, dark against the light
  let garret = ''
  for (let k = 0; k < 6; k++) {
    const x = HOLE.x0 + 10 + k * 16
    garret += `M${n(x)} 38L${n(x + (x - (HOLE.x0 + HOLE.x1) / 2) * 0.3 + 6)} 2`
  }
  cached = { wall, floor, rays: lampRays, litter, ceiling, sky, garret }
  return cached
}

/** A carboy in its wicker basket, the base at (x, y). */
function Carboy({ x, y, cracked = false }: { x: number; y: number; cracked?: boolean }) {
  return (
    <g>
      <path
        d={`M${x - 18} ${y}V${y - 34}Q${x - 18} ${y - 40} ${x - 10} ${y - 42}H${x + 10}Q${x + 18} ${y - 40} ${x + 18} ${y - 34}V${y}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* the wicker, woven */}
      <path
        d={`M${x - 16} ${y - 8}H${x + 16}M${x - 16} ${y - 16}H${x + 16}M${x - 16} ${y - 24}H${x + 16}M${x - 16} ${y - 32}H${x + 16}`}
        stroke={PAPER}
        strokeWidth={1}
        strokeDasharray="3 2.4"
      />
      {/* the glass shoulder and neck above the basket */}
      <path
        d={`M${x - 12} ${y - 42}Q${x - 12} ${y - 54} ${x - 4} ${y - 58}V${y - 66}H${x + 4}V${y - 58}Q${x + 12} ${y - 54} ${x + 12} ${y - 42}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <rect x={x - 5} y={y - 70} width={10} height={5} fill={INK} />
      {cracked && (
        <path
          d={`M${x - 8} ${y - 44}L${x - 4} ${y - 50}L${x - 7} ${y - 54}L${x - 2} ${y - 57}`}
          fill="none"
          stroke={INK}
          strokeWidth={1.2}
        />
      )}
    </g>
  )
}

function TheDemonstration({ uid }: ArtProps) {
  const m = marks()
  const wt = headAt(1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const ht = headAt(-1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  const winClip = `${uid}-win`
  const doorClip = `${uid}-door`
  const holeClip = `${uid}-hole`
  const holeIn = `M${HOLE.x0 + 4} 38L${HOLE.x0 + 10} 6L${HOLE.x1 - 8} 6L${HOLE.x1} 38Z`
  return (
    <>
      <defs>
        <clipPath id={winClip}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
        <clipPath id={doorClip}>
          <rect x={DOOR.x0} y={DOOR.top} width={DOOR.x1 - DOOR.x0} height={FLOOR - DOOR.top} />
        </clipPath>
        <clipPath id={holeClip}>
          <path d={holeIn} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 120], push: 1.03 })}>
        {/* the laboratory wall, lit by the moon at the window and the lamp */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the ceiling, and the opening in it above the steps, lit from below */}
        <rect x={0} y={0} width={W} height={38} fill={INK} />
        <path d={m.ceiling} stroke={PAPER} strokeWidth={LINE.fine} />
        <rect x={0} y={36} width={W} height={3} fill={PAPER} />
        <path
          d={`M${HOLE.x0 - 6} 38L${HOLE.x0} 2L${HOLE.x1} 2L${HOLE.x1 + 8} 38Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={holeIn} fill={PAPER} />
        <g clipPath={`url(#${holeClip})`}>
          <path d={m.garret} stroke={INK} strokeWidth={3.4} />
          <path d={`M${HOLE.x0 - 4} 10H${HOLE.x1 + 6}`} stroke={INK} strokeWidth={4} />
        </g>
        {/* broken laths hanging from its edge */}
        <path
          d={`M${HOLE.x0} 38L${HOLE.x0 + 6} 58M${HOLE.x0 + 22} 38L${HOLE.x0 + 20} 52M${HOLE.x1 - 10} 38L${HOLE.x1 - 4} 60M${HOLE.x1 + 4} 38L${HOLE.x1 + 12} 50`}
          stroke={PAPER}
          strokeWidth={5}
          strokeLinecap="round"
        />
        <path
          d={`M${HOLE.x0} 38L${HOLE.x0 + 6} 58M${HOLE.x0 + 22} 38L${HOLE.x0 + 20} 52M${HOLE.x1 - 10} 38L${HOLE.x1 - 4} 60M${HOLE.x1 + 4} 38L${HOLE.x1 + 12} 50`}
          stroke={INK}
          strokeWidth={2.6}
          strokeLinecap="round"
        />

        {/* the window, its lower sash pushed up, open on the moon */}
        <rect x={WIN.x - 8} y={WIN.y - 8} width={WIN.w + 16} height={WIN.h + 8} fill={INK} />
        <g clipPath={`url(#${winClip})`}>
          <path d={m.sky} fill={PAPER} />
          <circle cx={MOON[0]} cy={MOON[1]} r={19} fill={INK} />
          {/* "half a moon peeping occasionally through the rifts" (Chapter 5) */}
          <path
            d={`M${MOON[0]} ${MOON[1] - 15}A15 15 0 0 1 ${MOON[0]} ${MOON[1] + 15}Z`}
            fill={PAPER}
          />
        </g>
        <path
          d={`M${WIN.x - 4} ${WIN.y + WIN.h}V${WIN.y - 4}H${WIN.x + WIN.w + 4}V${WIN.y + WIN.h}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        {/* both sashes in the top half: the glazing bars, and the meeting rails */}
        <path
          d={`M${WIN.x + WIN.w / 2} ${WIN.y}V${WIN.y + 62}M${WIN.x} ${WIN.y + 30}H${WIN.x + WIN.w}`}
          stroke={PAPER}
          strokeWidth={2.4}
        />
        <rect
          x={WIN.x}
          y={WIN.y + 56}
          width={WIN.w}
          height={7}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <rect
          x={WIN.x}
          y={WIN.y + 64}
          width={WIN.w}
          height={5}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <rect x={WIN.x - 16} y={WIN.y + WIN.h} width={WIN.w + 32} height={10} fill={PAPER} />
        {/* on the sill: the print of a boot, and the round mark of the stump */}
        <path
          d={`M${WIN.x + 52} ${WIN.y + WIN.h + 3}h22q4 0 4 2.4q0 2.4 -4 2.4h-22q-3 0 -3 -2.4q0 -2.4 3 -2.4Z`}
          fill={INK}
        />
        <path d={`M${WIN.x + 54} ${WIN.y + WIN.h + 5.4}h5`} stroke={PAPER} strokeWidth={1} />
        <circle cx={WIN.x + 88} cy={WIN.y + WIN.h + 5.2} r={4.2} fill={INK} />
        <rect x={WIN.x - 16} y={WIN.y + WIN.h + 10} width={WIN.w + 32} height={2} fill={INK} />
        {/* "this great hook in the wall" */}
        <path
          d={`M${HOOK} 112V128Q${HOOK} 138 ${HOOK - 8} 138Q${HOOK - 16} 138 ${HOOK - 16} 130`}
          fill="none"
          stroke={PAPER}
          strokeWidth={5}
          strokeLinecap="round"
        />
        <path
          d={`M${HOOK} 112V128Q${HOOK} 138 ${HOOK - 8} 138Q${HOOK - 16} 138 ${HOOK - 16} 130`}
          fill="none"
          stroke={INK}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        <rect
          x={HOOK - 6}
          y={106}
          width={12}
          height={8}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* "and here again upon the floor": the round marks of the stump */}
        <g fill={INK}>
          <ellipse cx={WIN.x + 76} cy={282} rx={6.4} ry={2.6} />
          <ellipse cx={WIN.x + 100} cy={300} rx={7.4} ry={3} />
          <ellipse cx={WIN.x + 128} cy={322} rx={8.4} ry={3.4} />
        </g>

        {/* the small grate, in a plain stone surround, too small for a man */}
        <path
          d={`M${GRATE.x - 22} ${FLOOR}V${FLOOR - 58}H${GRATE.x + GRATE.w + 22}V${FLOOR}Z`}
          fill={PAPER}
        />
        <path
          d={`M${GRATE.x - 28} ${FLOOR - 62}H${GRATE.x + GRATE.w + 28}V${FLOOR - 54}H${GRATE.x - 28}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${GRATE.x} ${FLOOR}V${FLOOR - 22}Q${GRATE.x} ${FLOOR - 34} ${GRATE.x + GRATE.w / 2} ${FLOOR - 34}Q${GRATE.x + GRATE.w} ${FLOOR - 34} ${GRATE.x + GRATE.w} ${FLOOR - 22}V${FLOOR}Z`}
          fill={INK}
        />
        <path
          d={`M${GRATE.x + 4} ${FLOOR - 9}H${GRATE.x + GRATE.w - 4}M${GRATE.x + 4} ${FLOOR - 14}H${GRATE.x + GRATE.w - 4}`}
          stroke={PAPER}
          strokeWidth={1.2}
        />

        {/* the broken door, and the dark passage beyond it */}
        <rect
          x={DOOR.x0 - 10}
          y={DOOR.top - 10}
          width={DOOR.x1 - DOOR.x0 + 20}
          height={FLOOR - DOOR.top + 10}
          fill={INK}
        />
        <path
          d={`M${DOOR.x0 - 10} ${FLOOR}V${DOOR.top - 10}H${DOOR.x1 + 10}V${FLOOR}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <g clipPath={`url(#${doorClip})`}>
          <path
            d={gouge(DOOR.x0, 112, DOOR.x1, 110, 0.8) + gouge(DOOR.x0, 196, DOOR.x1, 198, 0.8)}
            fill={PAPER}
          />
        </g>
        {/* the door itself, swung back into the room, its edge splintered at the bolt */}
        <path
          d={`M${DOOR.x1 + 10} ${DOOR.top - 6}L${DOOR.x1 + 44} ${DOOR.top + 4}L${DOOR.x1 + 44} 156L${DOOR.x1 + 36} 162L${DOOR.x1 + 46} 168L${DOOR.x1 + 38} 174L${DOOR.x1 + 44} 180L${DOOR.x1 + 44} ${FLOOR + 24}L${DOOR.x1 + 10} ${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={`M${DOOR.x1 + 18} ${DOOR.top + 14}L${DOOR.x1 + 36} ${DOOR.top + 20}V140L${DOOR.x1 + 18} 138ZM${DOOR.x1 + 18} 196L${DOOR.x1 + 36} 200V${FLOOR + 6}L${DOOR.x1 + 18} ${FLOOR - 4}Z`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* the carboys in the corner, one cracked, and the dark stream from it */}
        <Carboy x={832} y={FLOOR + 14} cracked />
        <path
          d={ribbon(
            [
              [816, 280],
              [790, 288],
              [758, 292],
              [722, 298],
              [690, 302],
              [664, 306],
            ],
            10,
            0.6,
            false,
          )}
          fill={INK}
        />

        {/* the lamp's light */}
        <path d={m.rays} fill={PAPER} />

        {/* the set of steps up to the opening, the rope coiled at their foot */}
        <path
          d={`M${HOLE.x0 + 4} 318L${HOLE.x0 + 22} 36M${HOLE.x1 + 4} 318L${HOLE.x1 - 14} 36`}
          stroke={PAPER}
          strokeWidth={10}
          strokeLinecap="round"
        />
        <path
          d={`M${HOLE.x0 + 4} 318L${HOLE.x0 + 22} 36M${HOLE.x1 + 4} 318L${HOLE.x1 - 14} 36`}
          stroke={INK}
          strokeWidth={6}
          strokeLinecap="round"
        />
        {Array.from({ length: 10 }, (_, k) => {
          const y = 294 - k * 27
          const t = (318 - y) / 282
          const xl = HOLE.x0 + 4 + 18 * t
          const xr = HOLE.x1 + 4 - 18 * t
          return (
            <g key={y}>
              <path d={`M${n(xl)} ${y}H${n(xr)}`} stroke={PAPER} strokeWidth={7.6} />
              <path d={`M${n(xl)} ${y}H${n(xr)}`} stroke={INK} strokeWidth={4.4} />
            </g>
          )
        })}
        <path d={m.litter} stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
        <g fill="none" stroke={INK} strokeWidth={3.6}>
          <ellipse cx={190} cy={306} rx={30} ry={9} />
          <ellipse cx={188} cy={300} rx={24} ry={7} />
          <ellipse cx={190} cy={294} rx={18} ry={5.4} />
        </g>
        <g fill="none" stroke={PAPER} strokeWidth={0.9}>
          <ellipse cx={190} cy={306} rx={30} ry={9} />
          <ellipse cx={188} cy={300} rx={24} ry={7} />
          <ellipse cx={190} cy={294} rx={18} ry={5.4} />
        </g>

        {/* Watson on a plain chair in the corner, looking up at the opening */}
        <path
          d="M40 250H118M44 250V318M114 250V318M42 250V178"
          stroke={PAPER}
          strokeWidth={9}
          strokeLinecap="round"
        />
        <path
          d="M40 250H118M44 250V318M114 250V318M42 250V178"
          stroke={INK}
          strokeWidth={5.6}
          strokeLinecap="round"
        />
        <Figure parts={WATSON}>
          <g transform={wt}>
            <path d={WATSON_CUTS + WATSON_HAIR + COLLAR} fill={PAPER} />
            <path d={WATSON_PUPIL} fill={INK} />
          </g>
        </Figure>

        {/* Holmes at the foot of the steps, the lamp up to the opening */}
        <Figure parts={HOLMES}>
          <g transform={ht}>
            <path d={HOLMES_CUTS + HOLMES_HAIR + COLLAR} fill={PAPER} />
            <path d={HOLMES_PUPIL} fill={INK} />
          </g>
          <path d={gouge(392, 180, 400, 234, 0.9, -1)} fill={PAPER} />
        </Figure>
        <Lantern at={LAMP} scale={0.95} />
        <HolmesHands facing={-1} arms={HOL_HANDS} />
      </g>
    </>
  )
}

export const theDemonstration: LinocutArt = { width: W, height: H, Draw: TheDemonstration }
