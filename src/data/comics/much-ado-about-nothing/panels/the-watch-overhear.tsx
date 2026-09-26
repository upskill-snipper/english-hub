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

import { CutFigure, Person, bill, type Pose } from './people'

/**
 * Act 3, Scene 3: "The Watch overhear", the eighth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "A Street." The Watch mean to "sit here upon the church bench till two",
 *   and are told to "watch about Signior Leonato's door; for the wedding
 *   being there tomorrow, there is a great coil tonight". So the church wall
 *   and its bench are on the left, and on the right a window of the house
 *   Borachio shelters by is lit late.
 * - "Exeunt Dogberry and Verges." before Borachio and Conrade come. So
 *   Dogberry and Verges, whom the guide names, are not drawn.
 * - BORACHIO: "Stand thee close then under this penthouse, for it drizzles
 *   rain". So he and Conrade stand under the lean-to roof of a house front,
 *   the drizzle cut as fine slanting lines in the open street and dripping
 *   from the eave.
 * - "Peace! stir not." "Some treason, masters; yet stand close." So the Watch
 *   keep close against the church wall and lean to listen, the nearest with
 *   his hand cupped behind his ear.
 * - "bear you the lanthorn"; "have a care that your bills be not stolen";
 *   "being taken up of these men's bills". So each of the Watch has his bill
 *   (the kit's `bill`) and one carries the lantern, its flame the spot
 *   colour and their only light.
 * - BORACHIO: "I will, like a true drunkard, utter all to thee", "I have
 *   tonight wooed Margaret". So he talks with his hand held out, black
 *   against the lit window; CONRADE: "I wonder at it." He listens.
 *
 * The people are drawn from ./people.tsx. Nothing is taken from a film or
 * stage production. Seeds: 8101 (sky, walls, rain, drips and cobbles), 8102
 * (the lantern's light).
 */

const W = 860
const H = 340
/** The street. */
const GROUND = 298
/** The lanthorn, held low by the Watch: where its flame is. */
const LAMP: [number, number] = [178, 232]
/** The penthouse: its eave and where it meets the house. */
const EAVE = 98
const PENT = { x0: 470, x1: 790 }
/** The lit window behind Borachio, and the door behind Conrade. */
const LIT = { x: 530, y: 114, w: 58, h: 72 }
const DOOR = { x: 700, y: 120, w: 62 }
/** Where the house front begins, across a gap of dark street from the church. */
const HOUSE_X = 300

/** The far arm reaching back to grip the bill, which stands behind him. */
const GRIP = {
  pts: [
    [-3, -130],
    [-10, -112],
    [-14, -104],
  ] as [number, number][],
  hand: 'mitt' as const,
  deg: 150,
}

/**
 * The Watch keep close by the church wall, leaning to listen, their bills
 * upright. The first, nearest the talkers, cups a hand behind his ear; the
 * second carries the lanthorn low; the third holds his bill and keeps still.
 * Each bill is the kit's `bill`, held in the far hand.
 */
const LISTENER: Pose = {
  look: 'watchman',
  head: { rot: 12 },
  far: GRIP,
  near: {
    pts: [
      [4, -130],
      [13, -141],
      [-3, -153],
    ],
    hand: 'open',
    deg: -96,
    thumb: 1,
    spread: 9,
    size: 12.5,
  },
  legs: {
    far: [
      [-3, -70],
      [-8, -36],
      [-12, -3],
    ],
    near: [
      [3, -70],
      [12, -38],
      [14, -3],
    ],
  },
}
const LANTERN_BEARER: Pose = {
  look: 'watchman',
  head: { rot: 8 },
  far: GRIP,
  near: {
    pts: [
      [4, -130],
      [10, -106],
      [18, -86],
    ],
    hand: 'mitt',
    deg: 70,
  },
}
const STILL: Pose = {
  look: 'watchman',
  head: { rot: 5 },
  far: GRIP,
  near: {
    pts: [
      [4, -130],
      [6, -104],
      [8, -84],
    ],
    hand: 'mitt',
  },
}
/** A bill in the far hand: its foot on the ground beside him, its head high. */
const BILL = bill([-21, 0], [-15, -236])
const WATCH: [Pose, number][] = [
  [STILL, 66],
  [LANTERN_BEARER, 144],
  [LISTENER, 214],
]

/**
 * Borachio, "like a true drunkard", telling all: leaning back a little,
 * his near hand open and held out as he talks.
 */
const BORACHIO: Pose = {
  look: 'borachio',
  head: { rot: -6 },
  far: {
    pts: [
      [-3, -130],
      [-10, -106],
      [-6, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [18, -106],
      [36, -110],
    ],
    hand: 'open',
    deg: -16,
    thumb: -1,
  },
  legs: {
    far: [
      [-3, -70],
      [-12, -36],
      [-16, -3],
    ],
    near: [
      [3, -70],
      [10, -36],
      [12, -3],
    ],
  },
  cloak: 2,
}
/** Conrade, close at his elbow (flipped to face him), listening. */
const CONRADE: Pose = {
  look: 'conrade',
  head: { rot: 8 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [8, -104],
      [18, -92],
    ],
    hand: 'mitt',
  },
  cloak: 0,
}

/** The lanthorn: a horn-paned box with a peaked top and a ring, hung from the hand. */
const LANTERN =
  `M${LAMP[0] - 9} ${LAMP[1] - 12}H${LAMP[0] + 9}V${LAMP[1] + 12}H${LAMP[0] - 9}Z` +
  `M${LAMP[0] - 11} ${LAMP[1] - 12}L${LAMP[0]} ${LAMP[1] - 22}L${LAMP[0] + 11} ${LAMP[1] - 12}Z` +
  `M${LAMP[0] - 11} ${LAMP[1] + 12}H${LAMP[0] + 11}V${LAMP[1] + 15}H${LAMP[0] - 11}Z`
const LANTERN_PANES = `M${LAMP[0] - 6} ${LAMP[1] - 9}H${LAMP[0] + 6}V${LAMP[1] + 9}H${LAMP[0] - 6}Z`

type Marks = {
  sky: string
  church: string
  glow: string
  house: string
  rain: string
  drips: string
  cobbles: string
  wet: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(8101)
  // A night of drizzle: the sky barely cut.
  const sky = gougeField(r, { x0: 240, x1: HOUSE_X, y0: 4, y1: GROUND - 60 }, () => 0.1, {
    spacing: 8,
    len: [30, 90],
    gap: [10, 30],
    max: 2,
  })
  // The church wall: courses of stone, lit only near the lantern.
  const lampLight = (x: number, y: number) =>
    clamp(1 - Math.hypot(x - LAMP[0], (y - LAMP[1]) * 0.9) / 150) * 0.9
  let church = ''
  for (let y = 18; y < GROUND - 6; y += 16) {
    let x = (y / 16) % 2 ? -10 : 14
    while (x < 236) {
      const L = Math.max(lampLight(x + 20, y), 0.12)
      church += gouge(x + 2, y, x + 44, y + between(r, -0.8, 0.8), 0.6 + L * 1.8)
      if (r() < 0.2 + L) church += gouge(x + 1, y + 2, x + 1, y + 13, 0.5 + L * 1.2)
      x += 48
    }
  }
  const glow = rays(rng(8102), LAMP[0], LAMP[1], { from: 18, to: 120, every: 9, width: 2.8 })
  // The house front beyond the street, and the lit window beside its door.
  const house = gougeField(
    r,
    { x0: HOUSE_X, x1: W, y0: 4, y1: GROUND - 4 },
    (x, y) => clamp(1 - Math.hypot(x - LIT.x - 30, (y - 170) * 1.1) / 200) * 0.7 + 0.08,
    { spacing: 6.2, len: [16, 50], gap: [8, 22], max: 2.8 },
  )
  // "it drizzles rain": fine slanting cuts over the open street.
  let rain = ''
  for (let i = 0; i < 230; i++) {
    const x = between(r, 236, 870)
    const y = between(r, 6, GROUND)
    if (x > PENT.x0 - 6 && x < PENT.x1 + 34 && y > EAVE - 10) continue
    const len = between(r, 12, 22)
    rain += gouge(x, y, x - len * 0.3, y + len, 0.75)
  }
  // Drops falling from the eave of the penthouse.
  let drips = ''
  for (let x = PENT.x0 + 8; x < PENT.x1; x += between(r, 16, 26)) {
    const y = EAVE + 8 + between(r, 0, 60)
    drips += gouge(x, y, x - 1.5, y + between(r, 6, 11), 0.6)
  }
  // Wet cobbles, catching the lantern's light.
  let cobbles = ''
  for (let y = GROUND + 6; y < H; y += 9) {
    let x = between(r, -12, 0)
    while (x < W) {
      const w = between(r, 14, 24)
      const L = Math.max(clamp(1 - Math.hypot(x - LAMP[0], (y - GROUND) * 3) / 260), 0.2)
      cobbles += gouge(x + 2, y, x + w - 2, y + between(r, -0.6, 0.6), 1 + L * 2.2)
      x += w + between(r, 2, 5)
    }
  }
  const wet = wedge(LAMP[0] - 4, GROUND + 4, LAMP[0] + 30, H - 6, 5, 16)
  cached = { sky, church, glow, house, rain, drips, cobbles, wet }
  return cached
}

function Watch({ uid }: ArtProps) {
  const m = marks()
  const id = { church: `${uid}-church` }
  return (
    <>
      <defs>
        <clipPath id={id.church}>
          <rect x={0} y={0} width={244} height={GROUND} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
        <path d={m.sky} fill={PAPER} />
        {/* the corner of the house, and a shuttered window along its front */}
        <path d={`M${HOUSE_X} 4V${GROUND}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d="M356 150h48v60h-48Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M380 150v60" stroke={PAPER} strokeWidth={LINE.fine} />
        {/* the house front with its penthouse */}
        <path d={m.house} fill={PAPER} />
        {/* the lit window beside the door */}
        <rect
          x={LIT.x - 6}
          y={LIT.y - 6}
          width={LIT.w + 12}
          height={LIT.h + 12}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect x={LIT.x} y={LIT.y} width={LIT.w} height={LIT.h} fill={PAPER} />
        <path
          d={`M${LIT.x + LIT.w / 2} ${LIT.y}V${LIT.y + LIT.h}M${LIT.x} ${LIT.y + LIT.h / 2}H${LIT.x + LIT.w}`}
          stroke={INK}
          strokeWidth={3}
        />
        {/* the door, and the step before it */}
        <rect
          x={DOOR.x}
          y={DOOR.y}
          width={DOOR.w}
          height={GROUND - DOOR.y}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(DOOR.x + 16, DOOR.y + 10, DOOR.x + 16, GROUND - 8, 1) +
            gouge(DOOR.x + DOOR.w - 16, DOOR.y + 10, DOOR.x + DOOR.w - 16, GROUND - 8, 1)
          }
          fill={PAPER}
        />
        <rect x={DOOR.x - 10} y={GROUND - 6} width={DOOR.w + 20} height={6} fill={PAPER} />
        {/* the penthouse: a lean-to roof of tiles on two brackets */}
        <path
          d={`M${PENT.x0 - 10} ${EAVE}L${PENT.x0 + 20} ${EAVE - 30}H${PENT.x1 + 30}L${PENT.x1 + 30} ${EAVE}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={Array.from({ length: 13 }, (_, k) =>
            gouge(PENT.x0 + 4 + k * 23, EAVE - 2, PENT.x0 + 24 + k * 23, EAVE - 28, 1.2),
          ).join('')}
          fill={PAPER}
        />
        <rect x={PENT.x0 - 12} y={EAVE} width={PENT.x1 - PENT.x0 + 44} height={5} fill={PAPER} />
        <path
          d={`M${PENT.x0 + 6} ${EAVE + 5}V${EAVE + 40}L${PENT.x0 + 30} ${EAVE + 5}ZM${PENT.x1} ${EAVE + 5}V${EAVE + 40}L${PENT.x1 - 24} ${EAVE + 5}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={m.drips} fill={PAPER} />

        {/* the church, and its bench, where the Watch keep close */}
        <rect x={0} y={0} width={244} height={GROUND} fill={INK} />
        <g clipPath={`url(#${id.church})`}>
          <path d={m.church} fill={PAPER} />
          <path d={m.glow} fill={PAPER} />
        </g>
        <path d="M236 0V298" stroke={PAPER} strokeWidth={LINE.bold} />
        <path d="M0 250H226V260H0Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d="M14 260V296M110 260V296M206 260V296" stroke={PAPER} strokeWidth={4} />

        {/* the street, wet */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={INK} />
        <path d={m.cobbles} fill={PAPER} />
        <path d={m.wet} fill={PAPER} />
        <rect x={0} y={GROUND - 1} width={W} height={2.4} fill={PAPER} />

        {/* Borachio and Conrade, close under the penthouse */}
        <Person pose={BORACHIO} at={[556, GROUND]} scale={1.04} />
        <Person pose={CONRADE} at={[664, GROUND]} scale={1.04} flip />

        {/* the Watch, close against the church, each with his bill */}
        {WATCH.map(([pose, x]) => (
          <g key={x}>
            <CutFigure parts={BILL} transform={`translate(${x} ${GROUND}) scale(1.04)`} />
            <Person pose={pose} at={[x, GROUND]} scale={1.04} />
          </g>
        ))}
        {/* the lanthorn, its flame in the spot colour */}
        <path d={`M${LAMP[0] - 2} ${LAMP[1] - 30}V${LAMP[1] - 22}`} stroke={INK} strokeWidth={2} />
        <path d={LANTERN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={LANTERN_PANES} fill={PAPER} />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9 })}
          d={`M${LAMP[0]} ${LAMP[1] + 7}C${LAMP[0] - 4} ${LAMP[1] + 3} ${LAMP[0] - 3} ${LAMP[1] - 2} ${LAMP[0]} ${LAMP[1] - 8}C${LAMP[0] + 3} ${LAMP[1] - 2} ${LAMP[0] + 4} ${LAMP[1] + 3} ${LAMP[0]} ${LAMP[1] + 7}Z`}
          fill={RED}
        />
        <path d={m.rain} fill={PAPER} />
      </g>
    </>
  )
}

export const theWatchOverhear: LinocutArt = { width: W, height: H, Draw: Watch }
