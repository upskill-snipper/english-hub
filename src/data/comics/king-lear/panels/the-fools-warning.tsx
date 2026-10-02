import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  flagFloor,
  footShadow,
  prayingHands,
  stoneWall,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { CutFigure, Person } from './people'

/**
 * Act 1, Scene 5: "The Fool's warning", the fifth moment in the guide's
 * timeline. Every detail is from the scene (the held edition,
 * src/data/full-texts/king-lear.ts):
 *
 * - "Court before the Duke of Albany's Palace". Lear sends Kent on ahead: "Go
 *   you before to Gloucester with these letters", and Kent goes at once ("I
 *   will not sleep, my lord, till I have delivered your letter. [Exit.]"). So
 *   by the time of the Fool's line Kent is gone, and he is drawn small and
 *   far off, hooded, on the road beyond the gate.
 * - The Fool teases the King until he gives him the line the scene is
 *   remembered for: "If thou wert my fool, nuncle, I'd have thee beaten for
 *   being old before thy time." "How's that?" "Thou shouldst not have been
 *   old till thou hadst been wise." Lear answers: "O, let me not be mad, not
 *   mad, sweet heaven! Keep me in temper; I would not be mad!" So the Fool
 *   stands before his master and points at him, "Thou", and Lear lifts his
 *   face to the sky with his hands joined, praying. (A finger raised in
 *   warning was tried first; at panel size a fist with one finger up reads
 *   as a rude sign or a thumbs-up, so he points.)
 * - Lear is waiting for his horses ("Be my horses ready?") to ride to Regan
 *   before night; the court is in the last light of the day, the sun low and
 *   red beyond the gate, the spot colour. Over Lear's head the first stars
 *   are out, seven of them close together: the Fool's riddle in the same
 *   scene, "The reason why the seven stars are no more than seven is a pretty
 *   reason." "Because they are not eight?"
 *
 * The people are the kit's (./people.tsx). The court and the palace are not
 * described: a stone front with an arched door on the left, a paved court, a
 * low wall and an open gate to the road. Nothing is taken from a film or stage
 * production. Seeds: 1501 (sky), 1502 (palace wall), 1503 (court), 1504
 * (country).
 */

const W = 860
const H = 340
/** The far edge of the court, where its wall stands. */
const COURT = 236
/** The horizon of the open country beyond the gate. */
const HORIZON = 214
/** The sun, setting beyond the gate. */
const SUN: [number, number] = [688, 206]

/** The seven stars, close together, high over Lear. */
const STARS: [number, number][] = [
  [262, 44],
  [276, 36],
  [284, 50],
  [298, 41],
  [304, 56],
  [290, 62],
  [272, 58],
]

type Marks = {
  sky: string
  palace: { cuts: string; joints: string }
  court: string
  wall: string
  country: string
  shadows: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky darkens upwards from the sunset, and is lightest round the sun.
  const skyLight = (x: number, y: number) => {
    const low = Math.pow(clamp((y - 10) / (HORIZON - 10)), 1.3)
    const sun = clamp(1 - Math.hypot((x - SUN[0]) * 0.8, (y - SUN[1]) * 1.5) / 420)
    return clamp(0.08 + low * 0.95 + sun * 0.5, 0.06, 1)
  }
  const sky = gougeField(rng(1501), { x0: 180, x1: W, y0: 4, y1: HORIZON }, skyLight, {
    spacing: 6.6,
    len: [20, 90],
    gap: [6, 22],
  })
  // the palace front, lit along its edge by the low sun
  const palaceLight = (x: number) => clamp(0.04 + ((x - 100) / 100) * 0.34, 0.04, 0.38)
  const palace = stoneWall(
    rng(1502),
    { x0: 0, x1: 196, y0: 4, y1: COURT + 6 },
    (x) => palaceLight(x),
    28,
  )
  const court = flagFloor(rng(1503), W, H, COURT, [520, 150], 60, 5)
  // the low wall of the court, its coping and a few stones
  const rw = rng(1504)
  let wall = ''
  for (const [x0, x1] of [
    [196, 612],
    [766, W],
  ]) {
    // backlit by the sunset, so only a few joints catch the light
    for (let y = COURT - 22; y < COURT - 2; y += 12) {
      let x = x0 + between(rw, -8, 0)
      while (x < x1) {
        const len = between(rw, 30, 70)
        wall += gouge(Math.max(x, x0), y, Math.min(x + len, x1), y + between(rw, -0.6, 0.6), 0.75)
        x += len + between(rw, 10, 26)
      }
    }
  }
  // the open country beyond the gate: low hills, and the road running away
  let country = ''
  for (let y = HORIZON + 4; y < COURT; y += 4.4) {
    const w = 0.5 + ((y - HORIZON) / (COURT - HORIZON)) * 1.6
    country += wedge(612, y, 766, y + between(rw, -0.5, 0.5), w, w)
  }
  const shadows = footShadow(352, 321, 34) + footShadow(500, 325, 26)
  cached = { sky, palace, court, wall, country, shadows }
  return cached
}

/** Lear's hands, joined in prayer before his breast, in his own frame. */
const HANDS = prayingHands([19, -114], -84, 1.05)

function FoolsWarning(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [400, 180], push: 1.03 })}>
      {/* the evening sky, the sun going down beyond the gate */}
      <path d={m.sky} fill={PAPER} />
      <circle cx={SUN[0]} cy={SUN[1]} r={22} fill={RED} />
      {/* the seven stars, coming out one by one */}
      {STARS.map(([x, y], k) => (
        <path
          key={k}
          className="lc-fade-in"
          style={timing({ delay: 0.6 + k * 0.18, dur: 0.6 })}
          d={`M${x} ${n(y - 4.2)}L${n(x + 1.3)} ${n(y - 1.3)}L${n(x + 4.2)} ${y}L${n(x + 1.3)} ${n(y + 1.3)}L${x} ${n(y + 4.2)}L${n(x - 1.3)} ${n(y + 1.3)}L${n(x - 4.2)} ${y}L${n(x - 1.3)} ${n(y - 1.3)}Z`}
          fill={PAPER}
        />
      ))}

      {/* the country beyond the gate, and the road away */}
      <rect x={612} y={HORIZON} width={154} height={COURT - HORIZON} fill={PAPER} />
      <path d={m.country} fill={INK} />
      <path
        d={`M612 ${HORIZON + 2}Q650 ${HORIZON - 8} 700 ${HORIZON - 3}T766 ${HORIZON}`}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <path
        d={`M676 ${COURT}C690 ${COURT - 8} 700 ${COURT - 14} 712 ${HORIZON + 4}L716 ${HORIZON + 4}C708 ${COURT - 12} 704 ${COURT - 6} 700 ${COURT}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      {/* Kent, gone on ahead with the letters, far off on the road */}
      <Person
        pose={{
          look: 'caius',
          legs: {
            far: [
              [-3, -70],
              [-12, -36],
              [-16, -3],
            ],
            near: [
              [3, -70],
              [12, -38],
              [18, -3],
            ],
          },
          far: {
            pts: [
              [-3, -128],
              [-12, -104],
              [-16, -84],
            ],
          },
          near: {
            pts: [
              [4, -128],
              [14, -106],
              [20, -88],
            ],
          },
        }}
        at={[726, HORIZON + 6]}
        scale={0.3}
      />

      {/* the low wall of the court and its gate posts */}
      <path
        d={`M196 ${COURT - 34}H612V${COURT}H196ZM766 ${COURT - 34}H${W}V${COURT}H766Z`}
        fill={INK}
      />
      <path d={m.wall} fill={PAPER} />
      <path
        d={`M190 ${COURT - 40}H618V${COURT - 33}H190ZM760 ${COURT - 40}H${W}V${COURT - 33}H760Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.6}
      />
      <path
        d={`M602 ${COURT}V${COURT - 74}H622V${COURT}ZM756 ${COURT}V${COURT - 74}H776V${COURT}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M598 ${COURT - 78}H626V${COURT - 72}H598ZM752 ${COURT - 78}H780V${COURT - 72}H752Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />

      {/* the palace front on the left, its great door shut */}
      <path d={`M0 0H196V${COURT + 6}H0Z`} fill={INK} />
      <path d={m.palace.cuts} fill={PAPER} />
      <path d={m.palace.joints} fill={PAPER} />
      <path d={`M196 0V${COURT + 6}`} stroke={PAPER} strokeWidth={2.4} />
      <path
        d={`M60 ${COURT + 6}V122A48 48 0 0 1 156 122V${COURT + 6}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={3}
      />
      <path d={`M108 ${COURT + 6}V78`} stroke={PAPER} strokeWidth={1.4} />
      <path d={gouge(76, 140, 76, 228, 1) + gouge(140, 140, 140, 228, 1)} fill={PAPER} />

      {/* the paved court */}
      <rect x={0} y={COURT + 6} width={W} height={H - COURT - 6} fill={PAPER} />
      <path d={m.court} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* the Fool, before his master, pointing at him: "Thou" */}
      <Person
        pose={{
          look: 'fool',
          mouth: 'open',
          head: { rot: -10 },
          far: {
            pts: [
              [-3, -124],
              [-6, -102],
              [-2, -80],
            ],
          },
          near: {
            pts: [
              [4, -124],
              [19, -114],
              [35, -119],
            ],
            hand: 'point',
            deg: -8,
          },
        }}
        at={[498, 324]}
        scale={1.22}
        flip
      />

      {/* Lear: "O, let me not be mad, not mad, sweet heaven!" */}
      <Person
        pose={{
          look: 'lear',
          mantle: 8,
          head: { rot: -16 },
          far: {
            pts: [
              [-3, -128],
              [8, -110],
              [17, -114],
            ],
            hand: 'none',
          },
          near: {
            pts: [
              [6, -128],
              [16, -106],
              [19, -112],
            ],
            hand: 'none',
          },
        }}
        at={[352, 320]}
        scale={1.36}
      >
        <CutFigure parts={[HANDS.part]} halo={1.4} />
        <path d={HANDS.cut} transform={HANDS.t} fill={PAPER} />
      </Person>
    </g>
  )
}

export const theFoolsWarning: LinocutArt = { width: W, height: H, Draw: FoolsWarning }
