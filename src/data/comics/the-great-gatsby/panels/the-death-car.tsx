import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CAR_LAMP, GatsbysCar } from './gatsbys-car'
import { Person, seatedBody, seatedLegs, type P } from './people'

/**
 * Chapter VII: "The death car", the ninth moment in the guide's timeline.
 *
 * WHAT IS NOT DRAWN, AND WHY. Myrtle Wilson's death is never shown: no
 * impact, no body, no blood, nobody in the road, and not Wilson's garage,
 * where she runs out. The panel is the car on the road through the valley
 * of ashes at dusk, before anything happens, with the road ahead of it empty
 * in the light of its lamps. There is no red in this print at all: at phone
 * width any red near a car or a road reads as blood. So Gatsby's pink suit,
 * printed red in "The Plaza Hotel" that afternoon, is cut in ink here, as
 * the dusk takes every colour (and in "Gatsby's death" too, for the same
 * reason).
 *
 * THE QUOTATION. The guide's line for this moment, "So we drove on toward
 * death through the cooling twilight", puts death beside the car that kills
 * Myrtle, so it is not printed on the panel. The panel quotes another line
 * of Chapter VII instead, from the drive into town that afternoon: "Over the
 * ashheaps the giant eyes of Doctor T. J. Eckleburg kept their vigil". It
 * names no death and no means of one, and it is what the panel draws: the
 * eyes over the heaps, watching the road. It is in the held text but not
 * among the guide's own quotations, so in a checkout without the held text
 * the comics test fails on it, as it already fails there on the portraits'
 * words (./portraits/index.ts); landing the held edition is the fix, not
 * another line. (The panel first carried a caption in the guide's voice
 * instead, to pass in a checkout without the held text; the brief for this
 * text asks for a line of Chapter VII, and it was replaced on 9 October
 * 2026.) It is the panel's `quote`, not a `caption`, so the comics test
 * checks it word for word against the held text; a caption is not checked.
 *
 * Two other lines of Chapter VII were offered for it and turned down at
 * review (9 October 2026). Tom's "In Mr. Gatsby's car." names the car, and
 * on this panel the car is the means of Myrtle's death. "They were gone,
 * without a word, snapped out, made accidental, isolated, like ghosts" sets
 * "accidental" and "ghosts" beside the car that is about to kill her, where
 * they read as the accident and the dead foretold. The eyes' "vigil" names
 * no death: it is the watch the eyes keep, and the panel draws them keeping
 * it.
 *
 * Every detail is from the 1925 first edition, as Wikisource transcribes it:
 *
 * - "'You two start on home, Daisy,' said Tom. 'In Mr. Gatsby's car.'" "They
 *   were gone, without a word, snapped out, made accidental, isolated, like
 *   ghosts, even from our pity." So Gatsby and Daisy are alone in his car.
 * - "when we left New York she was very nervous and she thought it would
 *   steady her to drive" (Gatsby, later that night). So Daisy, in white with
 *   her short dark hair, is at the wheel, her hands on it, and Gatsby sits
 *   beside her. The car is the shared drawing in ./gatsbys-car.tsx, from its
 *   Chapter IV description: long, open, cream (left to the words), its
 *   wind-shields stepped one behind another.
 * - "the cooling twilight"; "the gathering darkness". So the sky is dark
 *   overhead and still pale low down behind the car, where they have come
 *   from, and the lamps are lit, their light cut in a cone along the road.
 * - "Over the ashheaps the giant eyes of Doctor T. J. Eckleburg kept their
 *   vigil" (that afternoon, on the way in). So the billboard stands over the
 *   heaps, its eyes and spectacles as the valley panel draws them
 *   (./the-valley-of-ashes.tsx), dimmed by the dusk; and the heaps of ash,
 *   gray by day, are dark shapes now, each pale only along its crest.
 *
 * Nothing is taken from a film, television or stage production. Seeds: 901
 * (the sky), 903 (the road), 904 (the lamps' light), 905 (the eyes' flaking
 * paint), 906 (the dusk on the board).
 */

const W = 860
const H = 340
/** The far edge of the valley under the dusk, and the road's far and near edges. */
const HORIZON = 196
const ROAD = { far: 252, near: 330 }
/** The billboard: its board, and the centres of the two eyes on it (as in the valley panel). */
const BOARD = { x0: 520, x1: 790, y0: 30, y1: 108 }
const EYES: P[] = [
  [592, 70],
  [718, 70],
]
/** Where the car stands on the road, and how big it is drawn. */
const CAR_AT: P = [96, 314]
const CAR_SCALE = 1.04

type Marks = {
  sky: string
  ridges: string
  heaps: string
  road: string
  beams: string
  beamCone: string
  dusk: string
  flakes: string
}

/** The far ridges and the near heaps of ash, as dark shapes against the dusk. */
const RIDGES =
  'M0 176C60 160 120 164 180 174C240 158 300 160 360 170C420 160 480 158 540 172C610 156 690 160 760 174C800 168 830 170 860 172V256H0Z'
const HEAPS =
  'M0 222C40 208 90 206 130 214C170 204 220 204 260 216C300 206 350 206 390 218C440 206 500 208 540 220C590 208 650 208 700 220C750 210 810 212 860 220V256H0Z'

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The dusk: "the gathering darkness" over the valley, darkest overhead and
  // to the east, and still light low down in the west, behind the car, where
  // they have come from.
  const sky = gougeField(
    rng(901),
    { x0: 0, x1: W, y0: 4, y1: HORIZON + 30 },
    (x, y) => clamp(0.06 + 0.9 * (y / HORIZON) ** 2.4 * clamp(1.2 - x / 760)),
    { spacing: 5, len: [24, 80], gap: [6, 24], max: 2.2 },
  )
  // The ash at dusk: the heaps are dark shapes now, not the gray land of the
  // afternoon, each pale only along its crest, with a second crest inside
  // each run of heaps for depth. (Hatching them in paper, as the valley panel
  // hatches the ash by day, was tried first: on the dark it read as rain.)
  const crest = (d: string, dy: number) =>
    d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_m, x, y) => `${x} ${n(Number(y) + dy)}`)
  const ridges = crest(RIDGES.split('V')[0], 14)
  const heaps = crest(HEAPS.split('V')[0], 12)

  // The road: dark, its ruts and dust cut in paper, paler towards the eye.
  const road = gougeField(
    rng(903),
    { x0: 0, x1: W, y0: ROAD.far + 3, y1: H },
    (_x, y) => clamp(0.06 + 0.16 * ((y - ROAD.far) / (ROAD.near - ROAD.far))),
    { spacing: 5, len: [20, 70], gap: [10, 30], max: 1.6 },
  )

  // The lamps lit: a cone of light thrown along the empty road ahead, cut
  // in paper, with the dark of the road left in streaks along the rays.
  const b = rng(904)
  const lamp: P = [CAR_AT[0] + CAR_LAMP[0] * CAR_SCALE, CAR_AT[1] + CAR_LAMP[1] * CAR_SCALE]
  const A0 = deg(-5)
  const A1 = deg(17)
  const far = 560
  const beamCone = `M${n(lamp[0])} ${n(lamp[1])}L${n(lamp[0] + Math.cos(A0) * far)} ${n(lamp[1] + Math.sin(A0) * far)}L${n(lamp[0] + Math.cos(A1) * far)} ${n(lamp[1] + Math.sin(A1) * far)}Z`
  let beams = ''
  for (let a = -4; a <= 16; a += between(b, 1.6, 2.6)) {
    const ang = deg(a)
    let rad = between(b, 40, 90)
    while (rad < far) {
      const len = between(b, 30, 90)
      if (b() < 0.55) {
        const w0 = 0.4 + rad / 260
        beams += wedge(
          lamp[0] + Math.cos(ang) * rad,
          lamp[1] + Math.sin(ang) * rad,
          lamp[0] + Math.cos(ang) * (rad + len),
          lamp[1] + Math.sin(ang) * (rad + len),
          w0,
          w0 + len / 260,
        )
      }
      rad += len + between(b, 10, 30)
    }
  }

  // "dimmed a little by many paintless days": chips gone from the eyes.
  const f = rng(905)
  let flakes = ''
  for (let i = 0; i < 40; i++) {
    const [ex, ey] = EYES[i % 2]
    const x = ex + between(f, -40, 40)
    const y = ey + between(f, -28, 28)
    flakes += gouge(x, y, x + between(f, 2, 5), y + between(f, -1.2, 1.2), between(f, 0.5, 0.9))
  }

  // The dusk over the board: fine level lines of ink across it, thicker low
  // down, so it is dimmer than the light on the road.
  const dk = rng(906)
  let dusk = ''
  for (let y = BOARD.y0 + 4; y < BOARD.y1; y += 4.4) {
    let x = BOARD.x0 + between(dk, -10, 0)
    while (x < BOARD.x1) {
      const len = between(dk, 20, 60)
      if (dk() < 0.55)
        dusk += gouge(
          x,
          y,
          x + len,
          y + between(dk, -0.3, 0.3),
          0.35 + ((y - BOARD.y0) / (BOARD.y1 - BOARD.y0)) * 0.5,
        )
      x += len + between(dk, 8, 24)
    }
  }

  cached = { sky, ridges, heaps, road, beams, beamCone, flakes, dusk }
  return cached
}

function TheDeathCar({ uid }: ArtProps) {
  const m = marks()
  const id = {
    ridges: `${uid}-ridges`,
    heaps: `${uid}-heaps`,
    board: `${uid}-board`,
    road: `${uid}-road`,
  }
  return (
    <>
      <defs>
        <clipPath id={id.ridges}>
          <path d={RIDGES} />
        </clipPath>
        <clipPath id={id.heaps}>
          <path d={HEAPS} />
        </clipPath>
        <clipPath id={id.board}>
          <rect
            x={BOARD.x0}
            y={BOARD.y0}
            width={BOARD.x1 - BOARD.x0}
            height={BOARD.y1 - BOARD.y0}
          />
        </clipPath>
        <clipPath id={id.road}>
          <rect x={0} y={ROAD.far + 2} width={W} height={H - ROAD.far} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 230], push: 1.03 })}>
        {/* the dusk sky */}
        <path d={m.sky} fill={PAPER} />

        {/* the far ridges of ash */}
        <path d={RIDGES} fill={INK} />
        <g clipPath={`url(#${id.ridges})`}>
          <path
            d={m.ridges}
            fill="none"
            stroke={PAPER}
            strokeWidth={0.9}
            strokeDasharray="14 6 4 6"
          />
        </g>
        <path d={RIDGES} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />

        {/* the billboard, high over the valley, the eyes still watching */}
        <path
          d={`M548 ${BOARD.y1}V214M762 ${BOARD.y1}V214M655 ${BOARD.y1}V214M548 ${BOARD.y1 + 32}H762`}
          stroke={PAPER}
          strokeWidth={7.6}
        />
        <path
          d={`M548 ${BOARD.y1}V214M762 ${BOARD.y1}V214M655 ${BOARD.y1}V214M548 ${BOARD.y1 + 32}H762`}
          stroke={INK}
          strokeWidth={4.4}
        />
        <rect
          x={BOARD.x0}
          y={BOARD.y0}
          width={BOARD.x1 - BOARD.x0}
          height={BOARD.y1 - BOARD.y0}
          fill={PAPER}
          stroke={INK}
          strokeWidth={4}
        />
        <g clipPath={`url(#${id.board})`}>
          {EYES.map(([x, y]) => (
            <g key={x}>
              <path
                d={`M${x - 38} ${y}Q${x} ${y - 28} ${x + 38} ${y}Q${x} ${y + 28} ${x - 38} ${y}Z`}
                fill={PAPER}
                stroke={INK}
                strokeWidth={3}
              />
              <circle cx={x + 2} cy={y + 4} r={14} fill={INK} />
              <circle cx={x - 2} cy={y} r={3.6} fill={PAPER} />
              <circle cx={x} cy={y} r={34} fill="none" stroke={INK} strokeWidth={6} />
            </g>
          ))}
          <path
            d={`M${EYES[0][0] + 32} ${EYES[0][1] - 12}Q${(EYES[0][0] + EYES[1][0]) / 2} ${EYES[0][1] - 28} ${EYES[1][0] - 32} ${EYES[1][1] - 12}M${EYES[0][0] - 34} ${EYES[0][1] - 4}L${BOARD.x0} ${EYES[0][1] - 10}M${EYES[1][0] + 34} ${EYES[1][1] - 4}L${BOARD.x1} ${EYES[1][1] - 10}`}
            fill="none"
            stroke={INK}
            strokeWidth={5.6}
          />
          <path d={m.flakes} fill={PAPER} />
          {/* "dimmed a little by many paintless days", and dimmer at dusk */}
          <path d={m.dusk} fill={INK} />
        </g>

        {/* the near heaps */}
        <path d={HEAPS} fill={INK} />
        <g clipPath={`url(#${id.heaps})`}>
          <path d={m.heaps} fill="none" stroke={PAPER} strokeWidth={1} strokeDasharray="18 7 5 7" />
        </g>
        <path d={HEAPS} fill="none" stroke={PAPER} strokeWidth={LINE.bold} />

        {/* the road, and the light of the lamps along it */}
        <rect x={0} y={ROAD.far} width={W} height={H - ROAD.far} fill={INK} />
        <path d={m.road} fill={PAPER} />
        <rect x={0} y={ROAD.far} width={W} height={2.4} fill={PAPER} />
        <g
          clipPath={`url(#${id.road})`}
          className="lc-fade-in"
          style={timing({ delay: 0.6, dur: 1.2 })}
        >
          <path d={m.beamCone} fill={PAPER} />
          <path d={m.beams} fill={INK} />
        </g>

        {/* the car, Daisy at the wheel and Gatsby beside her, his suit in ink */}
        <GatsbysCar at={CAR_AT} scale={CAR_SCALE}>
          <Person
            at={[132, -30]}
            pose={{
              look: 'daisy',
              body: seatedBody(22, 4, true),
              legs: seatedLegs(22, 30),
              seated: true,
              far: {
                pts: [
                  [3, -72],
                  [18, -60],
                  [30, -68],
                ],
                hand: 'grip',
              },
              near: {
                pts: [
                  [5, -72],
                  [20, -58],
                  [32, -66],
                ],
                hand: 'grip',
              },
            }}
          />
          <Person
            at={[108, -30]}
            pose={{
              look: 'gatsby',
              body: { hip: [0, -20], neck: [-12, -82] },
              legs: seatedLegs(20, 34),
              far: {
                pts: [
                  [-10, -76],
                  [-2, -54],
                  [12, -48],
                ],
                hand: 'none',
              },
              near: {
                pts: [
                  [-8, -76],
                  [6, -54],
                  [24, -48],
                ],
              },
            }}
          />
        </GatsbysCar>
      </g>
    </>
  )
}

export const theDeathCar: LinocutArt = { width: W, height: H, Draw: TheDeathCar }
