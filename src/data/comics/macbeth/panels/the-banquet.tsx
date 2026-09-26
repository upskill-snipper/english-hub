import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  arcDashes,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, HAIR_CUTS, HEAD, headAt, posed, type Part } from './cut-figure'
import {
  CROWN,
  CROWN_CUTS,
  EYE,
  HEAD_BEARD,
  HEAD_MACBETH,
  HEAD_WOMAN,
  VEIL,
} from './inverness-people'

/**
 * Act 3, Scene 4: "The banquet", the fifteenth moment in the guide's
 * timeline. The banqueting hall of the palace, that night. Every detail is
 * from the scene (the site's reader and the Folger text):
 *
 * - "A banquet prepared." The lords sit at a long table with a cloth, cups
 *   and candles; the candle flames are the spot colour, with Macbeth's crown.
 * - "The Ghost of Banquo enters, and sits in Macbeth's place." LENNOX: "Here
 *   is a place reserved, sir." MACBETH: "Where?" So the ghost sits in the
 *   high chair at the table, and Lennox, standing, gestures to it: he sees an
 *   empty seat.
 * - Only Macbeth sees the ghost, so the ghost is cut in paper, as light
 *   rather than as a body, and every lord at the table is looking at Macbeth,
 *   not at the chair.
 * - MACBETH: "Thou canst not say I did it. Never shake / Thy gory locks at
 *   me." And later: "Thou hast no speculation in those eyes / Which thou dost
 *   glare with." So the ghost's long hair hangs loose and wild about his
 *   head, and his eye, in profile, is a dark hollow glaring at Macbeth.
 *   Macbeth has sprung back from the table, pointing at the chair, his other
 *   fist clenched.
 * - LADY MACBETH: "Sit, worthy friends. My lord is often thus", and to him,
 *   "Are you a man?" So she is at his side, a hand on his arm.
 *
 * SAFEGUARDING. "Gory locks" and "twenty trenched gashes on his head" are
 * left to the words. The ghost has wild hair and staring eyes and no wound,
 * and no red is anywhere on him.
 * Macbeth, Lady Macbeth and Banquo wear the heads shared with the other
 * Macbeth panels (./inverness-people.tsx). Seed 615 for the wall and floor.
 */

const W = 860
const H = 340
const TABLE = 198
const FLOOR = 262
const CANDLES: [number, number][] = [
  [176, 150],
  [336, 150],
]

type Marks = {
  wall: string
  floor: string
  glow: string
  folds: string
  ghostHatch: string
  aura: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(615)
  // The hall is lit by the candles on the table; the far end is dark.
  const light = (x: number, y: number) =>
    Math.max(
      ...CANDLES.map(([cx, cy]) => clamp(1 - Math.hypot(x - cx, (y - cy) * 1.2) / 330) ** 1.1),
      0.05,
    )
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: FLOOR - 2 }, light, { spacing: 6.6 })
  const glow =
    rays(rng(616), CANDLES[0][0], CANDLES[0][1] - 4, { from: 14, to: 64, every: 7, width: 2.2 }) +
    rays(rng(617), CANDLES[1][0], CANDLES[1][1] - 4, { from: 14, to: 64, every: 7, width: 2.2 })

  let floor = ''
  const V = [430, 60]
  for (let xt = -700; xt < 1560; xt += 46) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    floor += wedge(xt, FLOOR, xb, H, 1, 3.2)
  }
  for (const [y, w] of [
    [276, 1.3],
    [298, 1.9],
    [326, 2.6],
  ])
    floor += gouge(0, y, W, y + between(r, -1, 1), w)

  // Folds in the tablecloth where it hangs over the front, and the shade
  // gathering towards its hem, away from the candles.
  let folds = gougeField(
    r,
    { x0: 34, x1: 568, y0: 216, y1: 262 },
    (_x, y) => clamp((y - 222) / 40) * 0.55,
    { spacing: 4.2, len: [16, 60], gap: [6, 22], max: 1.8 },
  )
  for (let x = 44; x < 562; x += between(r, 16, 30))
    folds += gouge(x, 212, x + between(r, -3, 3), 262, 0.9 + between(r, 0, 0.8))

  // The folds of the ghost's robe, cut in ink on the paper figure.
  const ghostHatch =
    gouge(490, 146, 486, 200, 0.9, 0.8) +
    gouge(502, 150, 500, 200, 0.8, 0.4) +
    gouge(520, 150, 522, 200, 0.8, -0.4) +
    gouge(496, 138, 528, 138, 0.7)

  // A faint ring of light in the chair round him.
  const a = rng(618)
  const aura =
    arcDashes(a, 513, 140, 50, 0, Math.PI * 2, [6, 18], [5, 14]) +
    arcDashes(a, 513, 140, 58, 0, Math.PI * 2, [5, 14], [7, 18]) +
    arcDashes(a, 513, 140, 66, 0, Math.PI * 2, [4, 10], [9, 22])

  cached = { wall, floor, glow, folds, ghostHatch, aura }
  return cached
}

/** The high chair at the table: Macbeth's own place. */
const CHAIR =
  'M478 204V70L488 60V48L494 42L500 48V58L512 50V36L518 28L524 36V50L536 58V48L542 42L548 48V60L558 70V204Z'
const CHAIR_CUTS =
  gouge(488, 80, 488, 196, 1.3) + gouge(548, 80, 548, 196, 1.3) + gouge(492, 74, 544, 74, 1)

/**
 * "Never shake / Thy gory locks at me": his hair, long and loose, fallen
 * about his head and down to his shoulders, in the frame of HEAD. Paper, with
 * ink strands, and no red anywhere on him.
 */
const LOCKS =
  'M12 -14C8 -21 -4 -24 -12 -18C-20 -12 -22 0 -21 10C-21 16 -23 21 -26 26C-20 26 -17 23 -15 20C-15 25 -17 29 -19 32C-12 31 -8 26 -7 20C-5 23 -3 25 0 26C-1 19 -3 12 -4 6C-5 0 -5 -3 -2 -7C2 -11 8 -12 12 -14Z'
const LOCK_STRANDS =
  'M4 -16C-8 -14 -14 -4 -16 8C-17 15 -20 20 -22 24M-2 -12C-10 -6 -12 4 -12 13C-12 20 -13 25 -15 29M8 -15C0 -15 -6 -10 -8 -2'
/** His beard, cut in ink strands on the paper face, so he reads as the Banquo of the other panels. */
const BEARD_STRANDS =
  'M14.5 9Q14 15 11 21M12 10.5Q11 16 8 21.5M9 12Q8 17 5.5 21.5M14 6.5Q16 7.5 15.5 9'

/** Banquo's ghost, seated in the chair, facing Macbeth. Cut in paper. */
const GHOST_HEAD_AT = 'translate(513 114) rotate(-4) scale(1.08)'
const GHOST: Part[] = [
  {
    d: 'M492 132C484 136 478 146 477 160L476 202L550 202L549 160C548 146 542 136 532 132C522 128 502 128 492 132Z',
  },
  { d: HEAD_BEARD, t: GHOST_HEAD_AT },
  { d: 'M534 142C542 154 546 168 548 180C554 188 560 194 566 196', w: 8, sep: 1.4 },
  { d: 'M562 192C567 190 573 191 576 195C573 199 567 200 563 199Z' },
]

/** The lords at the table, seated, all turned towards Macbeth. */
function lord(x: number, head: string, rot = 0, scale = 1): Part[] {
  return [
    {
      d: `M${x - 18} 204C${x - 19} 178 ${x - 12} 160 ${x + 2} 156C${x + 16} 158 ${x + 22} 176 ${x + 22} 204Z`,
    },
    { d: head, t: headAt(1, [x + 4, 138], rot, scale) },
    { d: `M${x + 12} 172C${x + 18} 182 ${x + 24} 190 ${x + 32} 194`, w: 7, sep: 1.4 },
  ]
}
const LORDS: [number, string, number, number][] = [
  [96, HEAD_BEARD, -2, 0.95],
  [164, HEAD, 4, 0.94],
  [238, HEAD_BEARD, 0, 0.97],
  [296, HEAD, -6, 0.93],
]

/** Lennox, standing behind the table, showing Macbeth the seat he thinks is empty. */
const LENNOX_HEAD_AT = headAt(1, [408, 100], 0, 1)
const LENNOX: Part[] = [
  {
    d: 'M392 204C390 170 388 140 396 124C402 118 414 118 420 124C428 140 428 170 426 204Z',
  },
  { d: HEAD_BEARD, t: LENNOX_HEAD_AT },
  { d: 'M416 132C428 142 440 146 458 146', w: 7.5, sep: 1.4 },
  { d: 'M456 142C461 140 468 141 472 144C469 149 462 150 457 150Z' },
]

/** Macbeth, sprung back from the table, pointing at the chair, his other fist clenched. */
const MACBETH_HEAD = { d: HEAD_MACBETH, at: [646, 141] as [number, number], rot: -8, scale: 1.08 }
const MACBETH: Part[] = [
  ...posed({
    facing: -1,
    neck: [650, 162],
    hip: [658, 238],
    head: MACBETH_HEAD,
    body: { width: 34, hem: 58, flare: 14, swing: -4 },
    near: {
      arm: [
        [642, 172],
        [616, 164],
        [594, 154],
      ],
      leg: [
        [654, 238],
        [642, 278],
        [632, 316],
      ],
    },
    far: {
      arm: [
        [658, 172],
        [668, 204],
        [664, 232],
      ],
      leg: [
        [662, 238],
        [678, 278],
        [692, 316],
      ],
    },
  }).slice(0, -1),
  { d: 'M596 150L580 146L579 150L592 156Z' },
]
const MACBETH_CUTS =
  gouge(662, 186, 676, 290, 1.2, -1) + gouge(648, 196, 650, 292, 1.1) + gouge(636, 236, 672, 238, 1)

/** Lady Macbeth at his side, her hand on his arm. */
const LADY_HEAD_AT = 'translate(752 140) scale(-1.02 1.02)'
const LADY: Part[] = [
  {
    d: 'M760 160C768 164 774 174 775 188C777 222 782 270 790 318H708C714 272 720 226 723 192C724 176 730 164 740 160C746 158 754 158 760 160Z',
  },
  { d: HEAD_WOMAN, t: LADY_HEAD_AT },
  { d: VEIL, t: LADY_HEAD_AT },
  { d: 'M738 174C724 184 706 190 688 190', w: 7, sep: 1.4 },
]
const LADY_CUTS =
  gouge(764, 190, 776, 312, 1.3, -1.2) +
  gouge(748, 200, 750, 314, 1.1) +
  gouge(730, 206, 722, 312, 1, 0.8)

/** A cup, a platter: the feast on the cloth. */
const CUPS =
  'M118 190H130L128 180C132 176 132 170 132 166H116C116 170 116 176 120 180Z' +
  'M262 190H274L272 180C276 176 276 170 276 166H260C260 170 260 176 264 180Z' +
  'M430 190H442L440 180C444 176 444 170 444 166H428C428 170 428 176 432 180Z' +
  'M198 196C204 190 232 190 238 196Z' +
  'M366 196C372 188 400 188 406 196Z'

function TheBanquet({ uid }: ArtProps) {
  const m = marks()
  const ghostClip = `${uid}-ghost`
  return (
    <>
      <defs>
        <clipPath id={ghostClip}>
          <rect x={479} y={20} width={78} height={TABLE - 20} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [540, 140], push: 1.035 })}>
        <path d={m.wall} fill={PAPER} />
        <path d={m.glow} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <rect x={0} y={FLOOR - 2} width={W} height={3} fill={INK} />

        {/* the lords, and Lennox */}
        {LORDS.map(([x, head, rot, scale]) => (
          <CutFigure key={x} parts={lord(x, head, rot, scale)}>
            <path
              d={HAIR_CUTS + EYE}
              transform={headAt(1, [x + 4, 138], rot, scale)}
              fill={PAPER}
            />
          </CutFigure>
        ))}
        <CutFigure parts={LENNOX}>
          <path d={HAIR_CUTS + EYE} transform={LENNOX_HEAD_AT} fill={PAPER} />
        </CutFigure>

        {/* Macbeth's place, and who sits in it */}
        <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={CHAIR_CUTS} fill={PAPER} />
        <g className="lc-fade-in" style={timing({ delay: 0.7, dur: 1.6 })}>
          <g clipPath={`url(#${ghostClip})`}>
            <path d={m.aura} fill="none" stroke={PAPER} strokeWidth={1.5} strokeLinecap="round" />
          </g>
          <g>
            <CutFigure parts={GHOST} tone="paper" halo={1.6} cuts={m.ghostHatch}>
              <g transform={GHOST_HEAD_AT}>
                <path
                  d={LOCKS}
                  fill={PAPER}
                  stroke={INK}
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                />
                <path d={LOCK_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
                <path d={BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.9} />
              </g>
              {/* "those eyes / Which thou dost glare with" */}
              <g transform={GHOST_HEAD_AT}>
                <ellipse cx={8.5} cy={-3.2} rx={3.4} ry={2.4} fill={INK} />
                <path d="M4 -7.5L13 -8.5" stroke={INK} strokeWidth={1.6} />
                <path
                  d="M13.5 -7L14.5 -3L19 3.5C19.5 4.5 18.5 5 17 5L14 5.5L15.5 8.5C16.5 12.5 15.5 18 11.5 22"
                  fill="none"
                  stroke={INK}
                  strokeWidth={1.2}
                />
                <path d="M11 9.5L15 9" stroke={INK} strokeWidth={1.2} />
              </g>
            </CutFigure>
          </g>
        </g>

        {/* the table: cloth, cups, candles */}
        <path d={`M30 ${TABLE}H572V${TABLE + 8}H30Z`} fill={PAPER} />
        <path d={`M34 ${TABLE + 8}H568V264H34Z`} fill={PAPER} />
        <path d={m.folds} fill={INK} />
        <path d={`M30 ${TABLE + 8}H572`} stroke={INK} strokeWidth={LINE.bold} />
        <path d="M34 264H568" stroke={INK} strokeWidth={3} />
        <path d={gouge(40, 270, 566, 270, 3.4) + gouge(60, 277, 540, 277, 2)} fill={INK} />
        <path d={CUPS} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        {CANDLES.map(([x, y], i) => (
          <g key={x}>
            <path
              d={`M${x - 10} ${TABLE}C${x - 10} ${TABLE - 5} ${x - 4} ${TABLE - 7} ${x} ${TABLE - 7}C${x + 4} ${TABLE - 7} ${x + 10} ${TABLE - 5} ${x + 10} ${TABLE}Z`}
              fill={INK}
              stroke={PAPER}
              strokeWidth={1.2}
            />
            <rect
              x={x - 4}
              y={y + 12}
              width={8}
              height={TABLE - y - 18}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.3}
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 0.8 + i * 0.1, delay: 0.2 + i * 0.2 })}
              d={`M${x} ${y + 12}C${x - 4.5} ${y + 7} ${x - 4} ${y} ${x} ${y - 9}C${x + 4} ${y} ${x + 4.5} ${y + 7} ${x} ${y + 12}Z`}
              fill={RED}
            />
          </g>
        ))}

        {/* Macbeth, and Lady Macbeth at his side */}
        <CutFigure parts={LADY} cuts={LADY_CUTS}>
          <path d={EYE} transform={LADY_HEAD_AT} fill={PAPER} />
          <path
            d={CROWN}
            transform={`${LADY_HEAD_AT} translate(0 -3) scale(0.78)`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
          />
        </CutFigure>
        <CutFigure parts={MACBETH} cuts={MACBETH_CUTS}>
          <path
            d={EYE}
            transform={headAt(-1, MACBETH_HEAD.at, MACBETH_HEAD.rot, MACBETH_HEAD.scale)}
            fill={PAPER}
          />
          <path
            d={CROWN}
            transform={headAt(-1, MACBETH_HEAD.at, MACBETH_HEAD.rot, MACBETH_HEAD.scale)}
            fill={RED}
            stroke={INK}
            strokeWidth={1}
          />
          <path
            d={CROWN_CUTS}
            transform={headAt(-1, MACBETH_HEAD.at, MACBETH_HEAD.rot, MACBETH_HEAD.scale)}
            fill={INK}
          />
        </CutFigure>
        <path d={gouge(610, 320, 712, 320, 1.8) + gouge(700, 322, 800, 322, 1.8)} fill={INK} />
      </g>
    </>
  )
}

export const theBanquet: LinocutArt = { width: W, height: H, Draw: TheBanquet }
