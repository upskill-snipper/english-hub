import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

/**
 * The Red House parlour sixteen years on, as Part Two finds it: the room of
 * "Nancy's Sunday" (Chapter 17) and "The Stone-pit gives up its secret"
 * (Chapter 18), which happen in it on one Sunday afternoon, an hour apart.
 * Both panels draw this room from the same place, so a student sees the
 * afternoon pass in it: first Nancy alone with her Bible and the empty chair
 * by the hearth, then Godfrey in that chair telling her.
 *
 * It is the room Chapter 3 shows in Godfrey's bachelor days ("Godfrey fails to
 * confess" draws it so, window on the right and fire on the left), and this
 * keeps that arrangement, but the text is clear that it has changed:
 *
 * - "A great change has come over the dark wainscoted parlour"; "Now all is
 *   polish, on which no yesterday's dust is ever allowed to rest, from the
 *   yard's width of oaken boards round the carpet, to the old Squire's gun and
 *   whips and walking-sticks, ranged on the stag's antlers above the
 *   mantelpiece." So the wainscot stays dark, oak boards run round a carpet,
 *   and above the mantelpiece a stag's antlers hold two whips and two
 *   walking-sticks, laid across the tines. (The gun is left off: at phone
 *   width a long barrel among the sticks reads as a weapon on show, and the
 *   whips and sticks carry the relics.)
 * - "The tankards are on the side-table still, but the bossed silver is
 *   undimmed by handling"; "the lavender and rose-leaves that fill the vases
 *   of Derbyshire spar". So three silver tankards, cut in paper with their
 *   bosses in ink, stand on a side-table, and two banded spar vases on the
 *   mantelpiece hold sprigs of lavender.
 * - "She went to the front window and looked as far as she could see along
 *   the road"; "looking at the placid churchyard with the long shadows of the
 *   gravestones across the bright green hillocks, and at the glowing autumn
 *   colours of the Rectory trees beyond". And the Red House stands "nearly
 *   opposite the church" (Chapter 3). So the front window shows the church
 *   tower, the churchyard's mounds and gravestones with long shadows lying
 *   across them, and beyond them the Rectory trees, their autumn colours
 *   printed in the spot colour.
 *
 * `hour` is 'afternoon' for Chapter 17 and 'tea' for Chapter 18, when the sun
 * is lower (the shadows longer) and the fire has been made up for tea.
 *
 * 'night' is the same room that night, for "Too late" (Chapter 20): "Nancy
 * and Godfrey walked home under the starlight in silence. When they entered
 * the oaken parlour". So the window is dark, with stars over the church
 * tower and the Rectory trees, which stand black against the sky with their
 * edges cut in paper, and the room is lit by the fire alone, burning low, as
 * nothing in the chapter mentions a candle. The gravestones are left out at
 * night: cut as pale edges in the dark, they read as small arched doors. Added by the artist of moments 16
 * to 19; 'afternoon' and 'tea' are unchanged by it.
 *
 * Seeds: 1411 (the wainscot, afternoon), 1511 (the wainscot at tea), 1711
 * (the wainscot at night), 1412 (the floor), 1413 (the carpet), 1414 (the
 * fire's light), 1415 (the trees), 1712 (the night sky).
 */

export const W = 860
export const H = 340
/** The skirting: the wall stands on it and the floor runs from it. */
export const FLOOR = 266

export type Hour = 'afternoon' | 'tea' | 'night'

/** The window: its opening, and the light it throws into the room. */
export const WINDOW = { x0: 572, x1: 788, y0: 30, y1: 224 } as const
const FIRE: Pt = [240, 250]

type Marks = {
  wall: string
  floor: string
  carpet: string
  glow: string
  shadows: string
  crowns: string
  crownCuts: string
  /** At night only: the stars. */
  stars: string
}

const cache: Partial<Record<Hour, Marks>> = {}

function marks(hour: Hour): Marks {
  const hit = cache[hour]
  if (hit) return hit
  // The room is lit by the window on the right; at tea-time the fire, made
  // up, lights the chimney-breast too. At night the window gives no light and
  // the fire, the only light, reaches further across the room.
  const night = hour === 'night'
  const fire = hour === 'tea' ? 0.55 : night ? 0.85 : 0.3
  const reach = night ? 300 : 170
  const light = (x: number, y: number) => {
    const l1 = night ? 0 : clamp(1 - Math.hypot((x - 680) * 0.75, (y - 120) * 1.1) / 360)
    const l2 = clamp(1 - Math.hypot((x - FIRE[0]) * 0.9, (y - FIRE[1]) * 1.2) / reach) * fire
    return Math.max(l1 * 0.85, l2, 0.04)
  }
  const wall = gougeField(
    rng(hour === 'tea' ? 1511 : night ? 1711 : 1411),
    { x0: 0, x1: W, y0: 6, y1: FLOOR - 4 },
    light,
    { spacing: 6.2, len: [14, 54] },
  )

  // The floor: oak boards, ink joints running to a vanishing point.
  const f = rng(1412)
  let floor = ''
  const V: Pt = [440, 40]
  for (let xt = -700; xt < 1600; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(f, 0.03, 0.08)
    }
  }
  for (let y = FLOOR + 2; y < FLOOR + 14; y += 3.2)
    floor += gouge(0, y, W, y, 2 - (y - FLOOR) * 0.12)

  // The carpet: a lozenge pattern cut in its dark field, in perspective.
  const c = rng(1413)
  let carpet = ''
  for (let k = 0; k < 8; k++) {
    const y = 285 + k * 7
    const s = (y - V[1]) / (H - V[1])
    for (let u = 200; u < 700; u += 24) {
      const x = V[0] + (u - V[0]) * s + between(c, -0.4, 0.4)
      const w = 4.4 * s
      carpet += `M${n(x)} ${n(y - 2.4)}L${n(x + w)} ${n(y)}L${n(x)} ${n(y + 2.4)}L${n(x - w)} ${n(y)}Z`
    }
  }

  const glow = rays(rng(1414), FIRE[0], FIRE[1] - 6, {
    from: 26,
    to: hour === 'tea' ? 64 : night ? 56 : 44,
    every: 8,
    width: 2,
  })

  // The churchyard: each gravestone's long shadow lies across the grass away
  // from the low western sun, longer at tea-time. None at night.
  const long = hour === 'tea' ? 1.5 : 1
  let shadows = ''
  if (!night)
    for (const [x, y, h] of STONES)
      shadows += wedge(x + 1, y - 0.6, x + h * 3.4 * long, y + h * 0.28 * long, 3.2, 0.4)

  // At night: the stars over the tower and the trees.
  let stars = ''
  if (night) {
    const { x0, x1, y0 } = WINDOW
    const s = rng(1712)
    for (let i = 0; i < 26; i++) {
      const x = between(s, x0 + 6, x1 - 6)
      const y = between(s, y0 + 6, 104)
      const k = between(s, 1.6, 3)
      stars += `M${n(x - k)} ${n(y)}L${n(x)} ${n(y - k * 0.36)}L${n(x + k)} ${n(y)}L${n(x)} ${n(y + k * 0.36)}Z`
      stars += `M${n(x)} ${n(y - k)}L${n(x + k * 0.36)} ${n(y)}L${n(x)} ${n(y + k)}L${n(x - k * 0.36)} ${n(y)}Z`
    }
  }

  // The Rectory trees: round crowns in the spot colour, cut through with a
  // few paper lines for the leaves catching the light.
  const t = rng(1415)
  let crowns = ''
  let crownCuts = ''
  for (const [cx, cy, r] of CROWNS) {
    crowns += `M${n(cx - r)} ${n(cy)}a${n(r)} ${n(r * 0.86)} 0 1 1 ${n(r * 2)} 0a${n(r)} ${n(r * 0.86)} 0 1 1 ${n(-r * 2)} 0Z`
    for (let i = 0; i < 4; i++) {
      const a = between(t, -r * 0.6, r * 0.5)
      const b = between(t, -r * 0.5, r * 0.4)
      crownCuts += gouge(cx + a, cy + b, cx + a + between(t, 5, 9), cy + b - 1.6, 0.8)
    }
  }
  const out = { wall, floor, carpet, glow, shadows, crowns, crownCuts, stars }
  cache[hour] = out
  return out
}

/** Gravestones in the churchyard: [x, foot, height]. */
const STONES: [number, number, number][] = [
  [598, 206, 15],
  [626, 188, 10],
  [654, 214, 17],
  [690, 196, 12],
  [722, 210, 14],
  [752, 190, 10],
]
/** The Rectory trees beyond: [cx, cy, radius]. */
const CROWNS: [number, number, number][] = [
  [650, 134, 22],
  [684, 124, 26],
  [722, 136, 20],
  [756, 126, 24],
  [784, 138, 18],
]

/** The carpet on the floor, in perspective to the boards' vanishing point. */
const CARPET = 'M196 276L684 276L744 340L136 340Z'

/** A walking-stick with a knob at one end, laid across the antlers at `y`. */
const stick = (x0: number, x1: number, y: number) =>
  `M${x0} ${y - 1.3}L${x1} ${y - 1.3}L${x1} ${y + 1.3}L${x0} ${y + 1.3}Z` +
  `M${x1 - 1} ${y}a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0 -6.8 0Z`

/**
 * The room, everything but the people and what they brought in: the dark
 * wainscot, the boards and carpet, the side-table with its tankards, the
 * chimney-piece with the antlers and vases, the fire, and the front window on
 * the churchyard. The panels draw the chairs, the table and the people over
 * it. Place inside the panel's push-in group.
 */
export function PolishedParlour({ uid, hour }: { uid: string; hour: Hour }) {
  const m = marks(hour)
  const night = hour === 'night'
  const view = `${uid}-view`
  const { x0, x1, y0, y1 } = WINDOW
  return (
    <>
      <defs>
        <clipPath id={view}>
          <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} />
        </clipPath>
      </defs>
      <path d={m.wall} fill={PAPER} />
      {/* the wainscot: a rail, and the frames of the panels cut in paper */}
      <rect x={0} y={172} width={W} height={4} fill={PAPER} />
      <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
        {[
          [14, 22, 50, 140],
          [74, 22, 50, 140],
          [344, 22, 56, 140],
          [410, 22, 56, 140],
          [476, 22, 56, 140],
          [800, 22, 48, 140],
          [14, 184, 50, 72],
          [74, 184, 50, 72],
          [344, 184, 56, 72],
          [410, 184, 56, 72],
          [476, 184, 56, 72],
          [800, 184, 48, 72],
        ].map(([x, y, w, h]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} />
        ))}
      </g>
      <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />

      {/* the floor: oak boards round the carpet */}
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={CARPET} fill={INK} />
      <path d="M208 281L672 281L728 336L152 336Z" fill="none" stroke={PAPER} strokeWidth={1.8} />
      <path d={m.carpet} fill={PAPER} />

      {/* the side-table, and the tankards whose bossed silver is undimmed */}
      <path d="M10 198H136V206H10Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d="M20 206V264M126 206V264M20 240H126"
        stroke={PAPER}
        strokeWidth={6.4}
        strokeLinecap="round"
      />
      <path d="M20 206V264M126 206V264M20 240H126" stroke={INK} strokeWidth={3.6} />
      {[40, 73, 106].map((x) => (
        <g key={x} transform={`translate(${x} 198)`}>
          <path
            d="M8 -18C16 -18 16 -5 8 -4"
            fill="none"
            stroke={PAPER}
            strokeWidth={2.4}
            strokeLinecap="round"
          />
          <path d="M-9 0L-7.6 -22H7.6L9 0Z" fill={PAPER} />
          <path d="M-9 -22H9L8 -26.5H-8Z" fill={PAPER} stroke={INK} strokeWidth={0.9} />
          <path d="M-3 -26.5L0 -30L3 -26.5Z" fill={PAPER} />
          <path d="M-8 -3.4H8M-8.4 -18H8.4" stroke={INK} strokeWidth={1} />
          <g fill={INK}>
            {[-5, 0, 5].map((bx) => (
              <circle key={bx} cx={bx} cy={-11} r={1.6} />
            ))}
          </g>
          <path d="M-6.6 -20V-3" stroke={INK} strokeWidth={1.2} />
        </g>
      ))}

      {/* the chimney-piece: a pale stone surround and the mantelpiece */}
      <rect x={164} y={172} width={152} height={FLOOR - 172} fill={PAPER} />
      <path d="M150 162H330V172H150Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <rect x={146} y={158} width={188} height={4} fill={PAPER} />
      <path
        d={
          gouge(176, 180, 176, 262, 1.4) +
          gouge(304, 180, 304, 262, 1.4) +
          gouge(206, 180, 274, 180, 1.1)
        }
        fill={INK}
      />
      <path d={`M194 ${FLOOR}V214Q194 196 212 196H268Q286 196 286 214V${FLOOR}Z`} fill={INK} />
      <path d={m.glow} fill={PAPER} />
      <g
        transform={
          hour === 'tea' ? undefined : 'translate(240 262) scale(0.8) translate(-240 -262)'
        }
      >
        <path
          d="M218 244H262M219 250H261M220 256H260M222 244V264M258 244V264"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.5}
        />
        <g fill={RED}>
          <path d="M222 244C222 238 228 235 233 239C235 234 244 234 246 239C251 236 259 239 258 244Z" />
          <path
            className="lc-flicker"
            d="M231 239C229 232 233 226 235 220C238 227 242 232 238 239Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d="M244 239C243 234 246 230 247 226C249 230 251 234 249 239Z"
          />
        </g>
      </g>
      {/* the hearthstone and the fender */}
      <rect x={160} y={FLOOR} width={160} height={7} fill={PAPER} />
      <rect x={160} y={FLOOR + 7} width={160} height={1.6} fill={INK} />
      <path d="M186 278H294" stroke={PAPER} strokeWidth={4.6} />
      <path d="M186 278H294" stroke={INK} strokeWidth={1.6} />

      {/* the vases of Derbyshire spar, full of lavender */}
      {[176, 304].map((x, i) => (
        <g key={x} transform={`translate(${x} 158)`}>
          <path
            d={
              ribbon(
                [
                  [0, -24],
                  [-3, -36],
                  [-7, -48],
                ],
                2.2,
                0.4,
                false,
              ) +
              ribbon(
                [
                  [0, -24],
                  [0.6, -38],
                  [1, -52],
                ],
                2.2,
                0.4,
                false,
              ) +
              ribbon(
                [
                  [0, -24],
                  [3.4, -36],
                  [7.4, -46],
                ],
                2.2,
                0.4,
                false,
              )
            }
            fill={PAPER}
          />
          <g fill={PAPER}>
            {[
              [-7, -48],
              [-6, -44],
              [1, -52],
              [1, -48],
              [7.4, -46],
              [6.6, -42],
            ].map(([ex, ey]) => (
              <ellipse key={`${ex}-${ey}`} cx={ex} cy={ey} rx={1.5} ry={2.4} />
            ))}
          </g>
          <path
            d={i ? 'M-4 -25Q-10 -30 -12 -27Q-8 -24 -4 -25Z' : 'M4 -25Q10 -30 12 -27Q8 -24 4 -25Z'}
            fill={PAPER}
          />
          <path
            d="M-7 0H7L5.4 -4Q11 -10 9.4 -17Q8 -22 4.4 -24H-4.4Q-8 -22 -9.4 -17Q-11 -10 -5.4 -4Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.9}
          />
          <path
            d="M-9 -15Q0 -12 9 -15M-8.6 -9.4Q0 -6.6 8.6 -9.4"
            fill="none"
            stroke={INK}
            strokeWidth={1.3}
          />
        </g>
      ))}

      {/* the stag's antlers, and the old Squire's whips and walking-sticks on them */}
      <path
        d="M226 102H254V122Q254 132 240 138Q226 132 226 122Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M234 104H246L244 118Q240 124 236 118Z" fill={PAPER} />
      <g fill={PAPER}>
        {[1, -1].map((s) => (
          <g key={s} transform={s < 0 ? 'translate(480 0) scale(-1 1)' : undefined}>
            <path
              d={ribbon(
                [
                  [236, 106],
                  [224, 96],
                  [208, 86],
                  [194, 72],
                  [184, 56],
                  [180, 40],
                ],
                5.4,
                0.5,
                false,
              )}
            />
            <path
              d={ribbon(
                [
                  [226, 99],
                  [224, 90],
                  [226, 82],
                ],
                3,
                0.5,
                false,
              )}
            />
            <path
              d={ribbon(
                [
                  [208, 87],
                  [210, 74],
                  [214, 62],
                ],
                3.4,
                0.5,
                false,
              )}
            />
            <path
              d={ribbon(
                [
                  [193, 71],
                  [196, 58],
                  [200, 46],
                ],
                3,
                0.5,
                false,
              )}
            />
          </g>
        ))}
      </g>
      <g fill={PAPER} stroke={INK} strokeWidth={0.7}>
        <path d={stick(172, 300, 52)} />
        <path d={stick(186, 290, 80)} />
      </g>
      {/* two whips: a long hunting-whip, its thong hanging in a loop, and a riding-whip */}
      <path d="M170 66L300 64.6L300 67.6L170 68.4Z" fill={PAPER} stroke={INK} strokeWidth={0.7} />
      <path d="M296 63.4H312V68.8H296Z" fill={PAPER} stroke={INK} strokeWidth={0.7} />
      <path
        d="M170 67C160 70 156 82 162 94C166 102 176 104 184 98"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <path d="M198 92.6L282 91L282 93.4L198 94.4Z" fill={PAPER} stroke={INK} strokeWidth={0.6} />
      <path d="M280 90.4H292V94.2H280Z" fill={PAPER} />

      {/* the front window, and the churchyard in the afternoon sun, or under the stars */}
      <rect x={x0 - 14} y={y0 - 14} width={x1 - x0 + 28} height={y1 - y0 + 26} fill={INK} />
      <rect
        x={x0 - 12}
        y={y0 - 12}
        width={x1 - x0 + 24}
        height={y1 - y0 + 22}
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill={night ? INK : PAPER} />
      {night && (
        <g clipPath={`url(#${view})`}>
          <path d={m.stars} fill={PAPER} />
          {/* the Rectory trees and the church tower, black on the dark, their edges cut */}
          <path
            d="M656 150V176M690 146V178M724 150V176M758 146V178M786 150V176"
            stroke={PAPER}
            strokeWidth={5.4}
          />
          <path d={m.crowns} fill={PAPER} stroke={PAPER} strokeWidth={2.4} />
          <path
            d="M656 150V176M690 146V178M724 150V176M758 146V178M786 150V176"
            stroke={INK}
            strokeWidth={3}
          />
          <path d={m.crowns} fill={INK} />
          <path
            d="M744 172V78H748V70H754V78H760V70H766V78H772V70H778V78H782V172Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.2}
          />
          <path d="M757 96Q763 88 769 96V114H757Z" fill={INK} stroke={PAPER} strokeWidth={0.9} />
          {/* the churchyard wall */}
          <path d="M572 174H788" stroke={PAPER} strokeWidth={1.2} />
        </g>
      )}
      {!night && (
        <g clipPath={`url(#${view})`}>
          {/* a few high clouds */}
          <path
            d={
              gouge(600, 44, 660, 43, 0.8) +
              gouge(690, 52, 770, 50, 0.9) +
              gouge(724, 40, 760, 40, 0.6)
            }
            fill={INK}
          />
          {/* the Rectory trees, in their autumn colours */}
          <path
            d="M656 150V176M690 146V178M724 150V176M758 146V178M786 150V176"
            stroke={INK}
            strokeWidth={3}
          />
          <path d={m.crowns} fill={RED} />
          <path d={m.crownCuts} fill={PAPER} />
          {/* the church tower, nearly opposite */}
          <path d="M744 172V78H748V70H754V78H760V70H766V78H772V70H778V78H782V172Z" fill={INK} />
          <path d="M757 96Q763 88 769 96V114H757Z" fill={PAPER} />
          <path d="M763 90V114" stroke={INK} strokeWidth={1} />
          <path d={gouge(763, 132, 763, 154, 1.2)} fill={PAPER} />
          {/* the churchyard wall, and the green mounds beyond it */}
          <path d="M572 174H788V180H572Z" fill={INK} />
          <path
            d={
              'M572 196Q610 184 648 194Q690 184 730 196Q760 188 788 194' +
              'M572 214Q606 206 640 216Q684 204 724 216Q760 208 788 214'
            }
            fill="none"
            stroke={INK}
            strokeWidth={1}
          />
          {/* the gravestones and their long shadows */}
          <path d={m.shadows} fill={INK} />
          <g fill={INK}>
            {STONES.map(([x, y, h]) => (
              <path
                key={x}
                d={`M${x - h * 0.34} ${y}V${y - h * 0.7}Q${x - h * 0.34} ${y - h} ${x} ${y - h}Q${x + h * 0.34} ${y - h} ${x + h * 0.34} ${y - h * 0.7}V${y}Z`}
              />
            ))}
          </g>
        </g>
      )}
      {/* glazing bars: six panes over six, edged in paper at night against the dark */}
      <g fill={INK} stroke={night ? PAPER : undefined} strokeWidth={night ? 0.8 : undefined}>
        <rect x={x0} y={y0} width={x1 - x0} height={3} />
        <rect x={x0} y={y1 - 3} width={x1 - x0} height={3} />
        <rect x={642} y={y0} width={3.4} height={y1 - y0} />
        <rect x={714} y={y0} width={3.4} height={y1 - y0} />
        <rect x={x0} y={126} width={x1 - x0} height={6} />
        <rect x={x0} y={78} width={x1 - x0} height={2.6} />
        <rect x={x0} y={177} width={x1 - x0} height={2.6} />
      </g>
      <rect x={x0 - 18} y={y1 + 2} width={x1 - x0 + 36} height={7} fill={PAPER} />
      <rect x={x0 - 18} y={y1 + 9} width={x1 - x0 + 36} height={2} fill={INK} />
    </>
  )
}

// ── THE FURNITURE THE PEOPLE USE ────────────────────────────────────────────

/**
 * Godfrey's wing armchair by the hearth, in profile, facing right towards the
 * table: its back at x 356, the seat at 244, feet on the boards at 290.
 *
 * Recut for "Nancy's Sunday" (moment 14), where it stands EMPTY and so must
 * read as a chair on its own: the first cut, a tall back with a round top
 * over a thin seat and arm, read at panel size as a coffin stood on end. Now
 * the wing comes forward at the top, the arm is padded with a rounded front,
 * and the seat is a cushion; `cuts` are its seams, in paper. The footprint is
 * unchanged (back x 350 to 388, seat top 240, arm 206 to 232, feet at 292),
 * so a figure placed in the old chair sits in this one.
 */
export const ARMCHAIR = {
  back: 'M352 292C348 236 346 186 350 152C352 136 362 128 376 128C390 128 400 136 402 148C404 160 398 168 390 172L388 200L386 292Z',
  seat: 'M370 240H446C456 240 460 250 456 260C452 266 444 268 436 268H370Z',
  arm: 'M374 206H436C448 206 454 214 452 224C450 232 444 236 436 234L374 232Z',
  legs: 'M362 268V292M446 268V292',
  cuts: 'M392 148Q400 158 390 168M444 214Q452 222 442 228M374 252H452',
  buttons: [
    [366, 152],
    [368, 178],
    [368, 204],
  ] as Pt[],
}

/** The round table between them, on a pillar and three feet. */
export const TABLE = {
  top: 'M468 208C468 202 488 198 520 198C552 198 572 202 572 208C572 214 552 218 520 218C488 218 468 214 468 208Z',
  pillar: 'M514 218H526L524 276H516Z',
  feet: 'M520 272C510 276 496 282 486 290M520 272C530 276 544 282 554 290M520 272V296',
}

/**
 * Nancy's chair, a plain chair seen in profile facing left across the table:
 * its raked back post at x 640 to 650, the seat at 244, the front leg at 598.
 */
export const SIDE_CHAIR = {
  back: 'M640 294L635 150L645 148L650 294Z',
  seat: 'M594 244H648V252H594Z',
  legs: 'M599 252V294',
}

/** A chair as it stands, in ink, lifted off the dark wall by a paper edge. */
export function ChairShape({
  parts,
  width = 5,
}: {
  parts: { fill: string[]; stroke: string[] }
  width?: number
}) {
  return (
    <>
      <g fill={PAPER} stroke={PAPER} strokeWidth={LINE.carve * 2} strokeLinejoin="round">
        {parts.fill.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={PAPER} strokeWidth={width + LINE.carve * 2} strokeLinecap="round">
        {parts.stroke.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill={INK}>
        {parts.fill.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={INK} strokeWidth={width} strokeLinecap="round">
        {parts.stroke.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </>
  )
}
